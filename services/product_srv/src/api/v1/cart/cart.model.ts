import {
  Entity,
  PrimaryColumn,
  Column,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { PriceModel } from '../price/price.model';
import { VariantModel } from '../variant/variant.model';

@Entity('order')
export class CartModel {
  @PrimaryColumn('uuid', { name: 'uuid', default: () => 'gen_random_uuid()' })
  uuid: string;

  @Column({ name: 'user_uuid', type: 'uuid' })
  userUuid: string;

  @Column()
  article: string;

  @Column({ name: 'variant_uuid', type: 'uuid' })
  variantUuid: string;

  @JoinColumn({ name: 'variant_uuid' })
  @ManyToOne(() => VariantModel, (variant) => variant.uuid)
  variant: VariantModel;

  @Column({ name: 'count', type: 'int', default: 0 })
  count: number;

  @Column({ name: 'showing', type: 'boolean', default: true })
  showing: boolean;

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
