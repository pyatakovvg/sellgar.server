import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { ShopModel } from '../shop/shop.model';
import { PriceModel } from '../price/price.model';

@Entity('store')
export class StoreModel {
  @PrimaryColumn('uuid', { name: 'uuid', default: () => 'gen_random_uuid()' })
  uuid: string;

  @Column()
  article: string;

  @Column({ name: 'shop_uuid', type: 'uuid', default: 'a7bded5f-24ee-4d2a-b13f-2436f4f5337f' })
  shopUuid: string;

  @JoinColumn({ name: 'shop_uuid' })
  @ManyToOne(() => ShopModel, (shop) => shop.uuid)
  shop: ShopModel;

  @Column({ name: 'variant_uuid', type: 'uuid' })
  variantUuid: string;

  @Column({ name: 'count', type: 'int', default: 0 })
  count: number;

  @OneToMany(() => PriceModel, (price) => price.store)
  prices: PriceModel[];

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    comment: 'дата создания',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: string;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    comment: 'дата обновления',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: string;
}
