import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";
import { Announcement } from "./announcement.entity";

@Entity("comment")
export class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 500 })
  comments: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.comment, { eager: true, cascade: true })
  user: User;

  @ManyToOne(() => Announcement, (announcement) => announcement.comment, {
    onDelete: "CASCADE",
  })
  announcement: Announcement;
}
