import { Inject, Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class NotificationController {
  constructor(@Inject('PRODUCT_EVENT_SERVICE') private readonly productSrv: any) {}

  @EventPattern('product.updated')
  async handleProductCreated(@Payload() data: any) {
    console.log('Product created', data);
  }
}
