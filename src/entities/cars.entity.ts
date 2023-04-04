import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Cars {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120 })
  brand: string;

  @Column({ length: 120 })
  model: string;

  @Column()
  year: number;

  @Column({ length: 120 })
  fuel: string;

  @Column({ type: "integer" })
  milage: number;

  @Column({ length: 120 })
  color: string;

  @Column("decimal", { precision: 2, scale: 2 })
  fipe: number;

  @Column("decimal", { precision: 2, scale: 2 })
  price: number;

  @Column({ length: 240 })
  description: string;

  @Column()
  cover: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user: User) => user.cars)
  user: User;
}
