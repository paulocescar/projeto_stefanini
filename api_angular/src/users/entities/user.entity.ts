import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, CreateDateColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Address } from '../../addresses/entities/address.entity'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: false})
  address_id: number;
  
  @ManyToOne(type => Address)
  @JoinColumn({name: "address_id"})
  addresses: Address;

  @Column({ default: true })
  isActive: boolean;
  
  @Column()
  password: string;

  @DeleteDateColumn({ nullable: true, type: "timestamp", default: null, select: false })
  public deleted_at: Date;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", select: false })
  public created_at: Date;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", select: false })
  public updated_at: Date;
}