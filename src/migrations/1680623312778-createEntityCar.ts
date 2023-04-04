import { MigrationInterface, QueryRunner } from "typeorm";

export class createEntityCar1680623312778 implements MigrationInterface {
    name = 'createEntityCar1680623312778'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(120) NOT NULL, "model" character varying(120) NOT NULL, "year" integer NOT NULL, "fuel" character varying(120) NOT NULL, "milage" integer NOT NULL, "color" character varying(120) NOT NULL, "fipe" numeric(2,2) NOT NULL, "price" numeric(2,2) NOT NULL, "description" character varying(240) NOT NULL, "cover" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "cpf" character varying(100) NOT NULL, "cellphone" character varying(100) NOT NULL, "birthday" TIMESTAMP NOT NULL, "description" character varying(200) NOT NULL, "cep" character varying(20) NOT NULL, "state" character varying(120) NOT NULL, "city" character varying(120) NOT NULL, "street" character varying(120) NOT NULL, "number" character varying(120) NOT NULL, "complemente" character varying, "isStaff" boolean NOT NULL DEFAULT false, "password" character varying(120) NOT NULL, "isAdm" boolean NOT NULL DEFAULT false, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "cars"`);
    }

}
