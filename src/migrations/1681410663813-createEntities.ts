import { MigrationInterface, QueryRunner } from "typeorm";

export class createEntities1681410663813 implements MigrationInterface {
    name = 'createEntities1681410663813'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "photos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "announcementId" uuid NOT NULL, CONSTRAINT "PK_5220c45b8e32d49d767b9b3d725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "announcement" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(120) NOT NULL, "model" character varying(120) NOT NULL, "year" integer NOT NULL, "fuel" character varying(120) NOT NULL, "milage" integer NOT NULL, "color" character varying(120) NOT NULL, "fipe" numeric(10,2) NOT NULL, "price" numeric(10,2) NOT NULL, "description" character varying(240) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "avatar" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_e0ef0550174fd1099a308fd18a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "cpf" character varying(20) NOT NULL, "phone" character varying(20) NOT NULL, "birthday" TIMESTAMP NOT NULL, "description" character varying(280) NOT NULL, "cep" character varying(10) NOT NULL, "state" character varying(20) NOT NULL, "city" character varying(100) NOT NULL, "street" character varying(140) NOT NULL, "number" character varying(5) NOT NULL, "complement" character varying(50), "isStaff" boolean NOT NULL DEFAULT false, "password" character varying(80) NOT NULL, "isAdm" boolean NOT NULL DEFAULT false, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_d87d3185828c4e0fbff2675650a" FOREIGN KEY ("announcementId") REFERENCES "announcement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD CONSTRAINT "FK_fd25dfe3da37df1715f11ba6ec8" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" DROP CONSTRAINT "FK_fd25dfe3da37df1715f11ba6ec8"`);
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_d87d3185828c4e0fbff2675650a"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "announcement"`);
        await queryRunner.query(`DROP TABLE "photos"`);
    }

}
