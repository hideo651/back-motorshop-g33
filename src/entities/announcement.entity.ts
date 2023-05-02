import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";
import { Photos } from "./photos.entity";
import { Comment } from "./comments.entity";

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

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  avatar: string;

  @ManyToOne(() => User, (user: User) => user.announcement, {
    onDelete: "CASCADE",
  })
  user: User;

  @OneToMany(() => Photos, (photos) => photos.announcement, {
    cascade: true,
    eager: true,
  })
  photos: Photos[];

  @OneToMany(() => Comment, (comment) => comment.announcement, {
    cascade: true,
  })
  comment: Comment[];
}
