import { Reflector } from '@nestjs/core';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';

import { SessionService } from '@/api/identity_srv/session/service/session.service';
import { AuthCookieService } from '@/common/services/auth-cookie.service';
import { AuthSessionContext, AuthSessionContextService } from '@/common/services/auth-session-context.service';
import { IS_PUBLIC_KEY } from '@/common/decorators/public.decorator';

type AuthenticatedRequest = Request & {
  user?: {
    uuid: string;
  };
};

type VerifiedSession = {
  data: {
    status: string;
    userId?: string;
  };
  meta: Record<string, never>;
};

@Injectable()
export class SessionAuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly sessionService: SessionService,
    private readonly authCookieService: AuthCookieService,
    private readonly authSessionContextService: AuthSessionContextService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request: AuthenticatedRequest = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse<Response>();
    const sessionSecret = this.authCookieService.read(request);

    if (!sessionSecret) {
      throw new UnauthorizedException();
    }

    const sessionContext = await this.getSessionContext(request);
    const session = await this.resolveSession(sessionSecret, sessionContext.fingerprint, response);

    if (session.data.status !== 'active' || !session.data.userId) {
      this.authCookieService.clear(response);
      throw new UnauthorizedException({
        code: session.data.status,
      });
    }

    request.user = {
      uuid: session.data.userId,
    };

    return true;
  }

  private async resolveSession(
    sessionSecret: string,
    fingerprint: string,
    response: Response,
  ): Promise<VerifiedSession> {
    const session = await this.verify(sessionSecret, fingerprint);

    if (session.data.status !== 'renew_required') {
      return session;
    }

    const renewedSession = await this.sessionService.renew({
      sessionSecret,
      fingerprint,
      clientType: 'web',
      gateway: 'admin_gw',
    });

    if (!renewedSession) {
      this.authCookieService.clear(response);
      throw new UnauthorizedException({
        code: 'renew_failed',
      });
    }

    this.authCookieService.set(response, renewedSession.sessionSecret);

    return {
      data: {
        status: 'active',
        userId: renewedSession.userId,
      },
      meta: {},
    };
  }

  private async verify(sessionSecret: string, fingerprint: string): Promise<VerifiedSession> {
    return await this.sessionService.verify({
      sessionSecret,
      fingerprint,
      clientType: 'web',
      gateway: 'admin_gw',
    });
  }

  private async getSessionContext(request: Request): Promise<AuthSessionContext> {
    try {
      return await this.authSessionContextService.build(request);
    } catch {
      throw new UnauthorizedException({
        code: 'invalid_session_context',
      });
    }
  }
}
