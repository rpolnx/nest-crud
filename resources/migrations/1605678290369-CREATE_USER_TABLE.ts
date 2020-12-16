import { MigrationInterface, QueryRunner } from 'typeorm'

export class CREATEUSERTABLE1605678290369 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE ${process.env.DB_SCHEMA}.users (
            id uuid DEFAULT uuid_generate_v4(),
            first_name varchar(30),
            last_name varchar(50),
            is_active boolean
         );`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE ${process.env.DB_SCHEMA}.users`)
    }
}
