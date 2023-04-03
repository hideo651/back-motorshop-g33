import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 100, unique: true })
  cpf: string;

  @Column({ length: 100 })
  cellphone: string;

  @Column()
  birthday: Date;

  @Column({ length: 200 })
  description: string;

  @Column({ length: 20 })
  cep: string;

  @Column({ length: 120 })
  state: string;

  @Column({ length: 120 })
  city: string;

  @Column({ length: 120 })
  street: string;

  @Column({ length: 120 })
  number: string;

  @Column({ nullable: true })
  complemente: string;

  @Column({ default: false })
  isStaff: boolean;

  @Column({ length: 120 })
  password: string;

  @Column({ default: false })
  isAdm: boolean;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export { User };
