<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220723173942 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE complaint_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE customer_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE "order_id_seq" INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE part_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE technician_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE vehicle_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE complaint (id INT NOT NULL, order_repair_id INT NOT NULL, subject VARCHAR(255) NOT NULL, description TEXT DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_5F2732B5FF044707 ON complaint (order_repair_id)');
        $this->addSql('CREATE TABLE customer (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE "order" (id INT NOT NULL, customer_id INT NOT NULL, vehicle_id INT NOT NULL, technician_id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_F52993989395C3F3 ON "order" (customer_id)');
        $this->addSql('CREATE INDEX IDX_F5299398545317D1 ON "order" (vehicle_id)');
        $this->addSql('CREATE INDEX IDX_F5299398E6C5D496 ON "order" (technician_id)');
        $this->addSql('CREATE TABLE order_part (order_id INT NOT NULL, part_id INT NOT NULL, PRIMARY KEY(order_id, part_id))');
        $this->addSql('CREATE INDEX IDX_4FE4AD18D9F6D38 ON order_part (order_id)');
        $this->addSql('CREATE INDEX IDX_4FE4AD14CE34BEC ON order_part (part_id)');
        $this->addSql('CREATE TABLE part (id INT NOT NULL, name VARCHAR(255) NOT NULL, description TEXT DEFAULT NULL, price DOUBLE PRECISION NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE technician (id INT NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE vehicle (id INT NOT NULL, year INT NOT NULL, make VARCHAR(255) NOT NULL, model VARCHAR(50) NOT NULL, vin VARCHAR(100) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE vehicle_part (vehicle_id INT NOT NULL, part_id INT NOT NULL, PRIMARY KEY(vehicle_id, part_id))');
        $this->addSql('CREATE INDEX IDX_3B92439A545317D1 ON vehicle_part (vehicle_id)');
        $this->addSql('CREATE INDEX IDX_3B92439A4CE34BEC ON vehicle_part (part_id)');
        $this->addSql('ALTER TABLE complaint ADD CONSTRAINT FK_5F2732B5FF044707 FOREIGN KEY (order_repair_id) REFERENCES "order" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE "order" ADD CONSTRAINT FK_F52993989395C3F3 FOREIGN KEY (customer_id) REFERENCES customer (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE "order" ADD CONSTRAINT FK_F5299398545317D1 FOREIGN KEY (vehicle_id) REFERENCES vehicle (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE "order" ADD CONSTRAINT FK_F5299398E6C5D496 FOREIGN KEY (technician_id) REFERENCES technician (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE order_part ADD CONSTRAINT FK_4FE4AD18D9F6D38 FOREIGN KEY (order_id) REFERENCES "order" (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE order_part ADD CONSTRAINT FK_4FE4AD14CE34BEC FOREIGN KEY (part_id) REFERENCES part (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE vehicle_part ADD CONSTRAINT FK_3B92439A545317D1 FOREIGN KEY (vehicle_id) REFERENCES vehicle (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE vehicle_part ADD CONSTRAINT FK_3B92439A4CE34BEC FOREIGN KEY (part_id) REFERENCES part (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE "order" DROP CONSTRAINT FK_F52993989395C3F3');
        $this->addSql('ALTER TABLE complaint DROP CONSTRAINT FK_5F2732B5FF044707');
        $this->addSql('ALTER TABLE order_part DROP CONSTRAINT FK_4FE4AD18D9F6D38');
        $this->addSql('ALTER TABLE order_part DROP CONSTRAINT FK_4FE4AD14CE34BEC');
        $this->addSql('ALTER TABLE vehicle_part DROP CONSTRAINT FK_3B92439A4CE34BEC');
        $this->addSql('ALTER TABLE "order" DROP CONSTRAINT FK_F5299398E6C5D496');
        $this->addSql('ALTER TABLE "order" DROP CONSTRAINT FK_F5299398545317D1');
        $this->addSql('ALTER TABLE vehicle_part DROP CONSTRAINT FK_3B92439A545317D1');
        $this->addSql('DROP SEQUENCE complaint_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE customer_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE "order_id_seq" CASCADE');
        $this->addSql('DROP SEQUENCE part_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE technician_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE vehicle_id_seq CASCADE');
        $this->addSql('DROP TABLE complaint');
        $this->addSql('DROP TABLE customer');
        $this->addSql('DROP TABLE "order"');
        $this->addSql('DROP TABLE order_part');
        $this->addSql('DROP TABLE part');
        $this->addSql('DROP TABLE technician');
        $this->addSql('DROP TABLE vehicle');
        $this->addSql('DROP TABLE vehicle_part');
    }
}
