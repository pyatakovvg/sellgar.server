import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  create() {
    return 'This action adds a new mail';
  }

  findAll() {
    return `This action returns all mail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mail`;
  }

  remove(id: number) {
    return `This action removes a #${id} mail`;
  }

  send() {
    console.log(123);
    this.mailerService.sendMail({
      to: 'zemlya911@mail.ru',
      from: '"Support Team" <support@example.com>', // override default from
      subject: 'Welcome to Nice App! Confirm your Email',
      html: '<p>hello</p>',
      // template: './confirmation',
      // context: {
      //   name: 'user.name',
      // },
    });
  }
}
