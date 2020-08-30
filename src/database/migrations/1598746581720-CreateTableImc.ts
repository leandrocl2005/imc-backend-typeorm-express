import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableImc1598746581720 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'imcs',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',             
                },
                {
                    name: 'weight',
                    type: 'numeric',
                },
                {
                    name: 'height',
                    type: 'numeric',
                },               
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('imcs');
    }

}
