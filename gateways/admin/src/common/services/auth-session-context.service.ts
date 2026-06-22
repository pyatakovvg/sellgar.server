import { Injectable } from '@nestjs/common';
import { Request } from 'express';

import { AgentService } from '@/common/services/agent/agent.service';
import { FingerprintService } from '@/common/services/fingerprint/fingerprint.service';

export type AuthSessionContext = {
  clientType: string;
  gateway: string;
  device: string;
  fingerprint: string;
};

@Injectable()
export class AuthSessionContextService {
  private readonly clientType = 'web';
  private readonly gateway = 'admin_gw';

  constructor(
    private readonly agentService: AgentService,
    private readonly fingerprintService: FingerprintService,
  ) {}

  async build(req: Request): Promise<AuthSessionContext> {
    const agent = await this.agentService.get(req);
    const fingerprint = await this.fingerprintService.generate({
      userAgent: agent.userAgent,
      deviceId: agent.deviceId,
      deviceName: agent.deviceName,
    });

    return {
      clientType: this.clientType,
      gateway: this.gateway,
      device: agent.deviceName,
      fingerprint,
    };
  }
}
