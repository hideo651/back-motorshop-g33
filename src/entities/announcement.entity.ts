import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";
import { Photos } from "./photos";

@Entity("announcement")
export class Announcement {
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

  @Column("decimal", { precision: 10, scale: 2 })
  fipe: number;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @Column({ length: 240 })
  description: string;

  @Column()
  cover: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: false })
  avatar: string;

  @ManyToOne(() => User, (user: User) => user.announcement)
  user: User;

  @OneToMany(() => Photos, (photos) => photos.announcement, {
    eager: true,
    nullable: false,
  })
  photos: Photos[];
}
