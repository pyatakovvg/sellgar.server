import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';

import { MailService } from './mail.service';
import { MailController } from './mail.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.mail.ru',
        secure: true,
        port: 465,
        auth: {
          user: 'zemlya911@mail.ru',
          pass: 'g9Sj59segkjU7bAxQbJB',
        },
        template: {
          dir: __dirname + '/templates',
          adapter: new EjsAdapter(),
          options: {
            strict: true,
          },
        },
      },
    }),
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
