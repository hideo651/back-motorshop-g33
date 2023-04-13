import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Announcement } from "./announcement.entity";

@Entity("photos")
export class Photos {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Announcement, (announcement) => announcement.photos)
  announcement: Announcement;
}
