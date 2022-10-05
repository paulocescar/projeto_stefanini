import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, CreateDateColumn } from 'typeorm';

@Entity('addresses')
export class Address {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    zipcode: string;
  
    @Column()
    street: string;
  
    @Column()
    city: string;
  
    @Column()
    district: string;
  
    @Column({ default: true })
    state: string;
    
    @Column()
    country: string;
  
    @DeleteDateColumn({ nullable: true, type: "timestamp", default: null, select: false })
    public deleted_at: Date;
  
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", select: false })
    public created_at: Date;
  
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", select: false })
    public updated_at: Date;
  }
