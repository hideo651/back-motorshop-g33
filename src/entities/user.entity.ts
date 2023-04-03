import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import { hashSync } from "bcrypt";

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length:100 })
    name: string;

    @Column({ length:100, unique: true })
    email: string;

    @Column({length: 120,})
    password: string;

    @Column({default: false})
    isAdm: boolean;

    @Column({default: true})
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){this.password = hashSync(this.password, 10)};
}

export {User};
