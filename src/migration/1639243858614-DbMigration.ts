import {MigrationInterface, QueryRunner} from "typeorm";

export class DbMigration1639243858614 implements MigrationInterface {
    name = 'DbMigration1639243858614'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `filas` (`id` int NOT NULL AUTO_INCREMENT, `status` varchar(15) NOT NULL, `createdAt` timestamp NOT NULL, `updatedAt` timestamp NULL, `agenda_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `permissoes` (`id` int NOT NULL AUTO_INCREMENT, `criar_atendimento` tinyint NOT NULL DEFAULT 1, `confirma_agenda` tinyint NOT NULL DEFAULT 0, `especialista` tinyint NOT NULL DEFAULT 0, `gerente` tinyint NOT NULL DEFAULT 0, `adm` tinyint NOT NULL DEFAULT 0, `master` tinyint NOT NULL DEFAULT 0, `createdAt` timestamp NOT NULL, `updatedAt` timestamp NULL, `deletedAt` timestamp NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `usuarios` (`id` varchar(36) NOT NULL, `nome` varchar(255) NOT NULL, `sobrenome` varchar(255) NOT NULL, `cpf` varchar(255) NOT NULL, `telefone` varchar(255) NOT NULL, `telefone2` varchar(255) NULL, `email` varchar(255) NULL, `data_nascimento` varchar(255) NOT NULL, `senha` varchar(255) NULL, `createdAt` timestamp NOT NULL, `updatedAt` timestamp NULL, `deletedAt` timestamp NULL, `endereco_id` int NULL, `profissao_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `enderecos` (`id` int NOT NULL AUTO_INCREMENT, `rua` varchar(255) NOT NULL, `numero` varchar(8) NOT NULL, `bairro` varchar(50) NOT NULL, `cep` varchar(20) NULL, `procedente` varchar(50) NULL, `createdAt` timestamp NOT NULL, `updatedAt` timestamp NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `profissionais` (`id` varchar(36) NOT NULL, `nome` varchar(255) NOT NULL, `sobrenome` varchar(255) NOT NULL, `cpf` varchar(255) NOT NULL, `telefone` varchar(255) NOT NULL, `email` varchar(255) NULL, `data_nascimento` varchar(255) NOT NULL, `senha` varchar(255) NULL, `especialidade` varchar(255) NULL, `createdAt` timestamp NOT NULL, `updatedAt` timestamp NULL, `deletedAt` timestamp NULL, `endereco_id` int NULL, `permissao_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `servicos` (`id` int NOT NULL AUTO_INCREMENT, `nome` varchar(255) NOT NULL, `duracao` varchar(255) NOT NULL, `categoria` varchar(255) NOT NULL, `preco` varchar(255) NULL, `descricao` varchar(255) NOT NULL, `observacao` varchar(255) NULL, `createdAt` timestamp NOT NULL, `updatedAt` timestamp NULL, `deletedAt` timestamp NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `status` (`id` int NOT NULL AUTO_INCREMENT, `descricao` varchar(255) NOT NULL, `createdAt` timestamp NOT NULL, `updatedAt` timestamp NULL, `deletedAt` timestamp NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `agendas` (`id` int NOT NULL AUTO_INCREMENT, `data` varchar(10) NOT NULL, `hora` varchar(5) NOT NULL, `observacao` varchar(70) NULL, `createdAt` timestamp NOT NULL, `updatedAt` timestamp NULL, `usuario_id` varchar(36) NULL, `profissional_id` varchar(36) NULL, `servico_id` int NULL, `status_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `anamnesias` (`id` int NOT NULL AUTO_INCREMENT, `possui` tinyint NULL, `tipo` varchar(100) NULL, `descricao` varchar(255) NULL, `createdAt` timestamp NOT NULL, `updatedAt` timestamp NULL, `deletedAt` timestamp NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `anamnesias_usuario_id_usuarios` (`anamnesiasId` int NOT NULL, `usuariosId` varchar(36) NOT NULL, INDEX `IDX_297af4981b95be843253e456b7` (`anamnesiasId`), INDEX `IDX_65b164a4b95170af4d0982050b` (`usuariosId`), PRIMARY KEY (`anamnesiasId`, `usuariosId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `filas` ADD CONSTRAINT `FK_9271bbd8e84a72d676c8f46e776` FOREIGN KEY (`agenda_id`) REFERENCES `agendas`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `usuarios` ADD CONSTRAINT `FK_daa6f9099a4117b84e09226f53e` FOREIGN KEY (`endereco_id`) REFERENCES `enderecos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `usuarios` ADD CONSTRAINT `FK_73d54351ee24fbba1e0699c5c87` FOREIGN KEY (`profissao_id`) REFERENCES `permissoes`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `profissionais` ADD CONSTRAINT `FK_40496560d4944b7b30926abcad7` FOREIGN KEY (`endereco_id`) REFERENCES `enderecos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `profissionais` ADD CONSTRAINT `FK_99bc7e0958670949b0856a92069` FOREIGN KEY (`permissao_id`) REFERENCES `permissoes`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `agendas` ADD CONSTRAINT `FK_a866fc2bbe534962d49c6e5cf73` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `agendas` ADD CONSTRAINT `FK_929a8f39c2ec977b2b45e495f20` FOREIGN KEY (`profissional_id`) REFERENCES `profissionais`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `agendas` ADD CONSTRAINT `FK_a617d22cd07e17413e0a9946ccc` FOREIGN KEY (`servico_id`) REFERENCES `servicos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `agendas` ADD CONSTRAINT `FK_6bfc09ec1a23e5825e9fb2869be` FOREIGN KEY (`status_id`) REFERENCES `status`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `anamnesias_usuario_id_usuarios` ADD CONSTRAINT `FK_297af4981b95be843253e456b73` FOREIGN KEY (`anamnesiasId`) REFERENCES `anamnesias`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `anamnesias_usuario_id_usuarios` ADD CONSTRAINT `FK_65b164a4b95170af4d0982050bf` FOREIGN KEY (`usuariosId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `anamnesias_usuario_id_usuarios` DROP FOREIGN KEY `FK_65b164a4b95170af4d0982050bf`");
        await queryRunner.query("ALTER TABLE `anamnesias_usuario_id_usuarios` DROP FOREIGN KEY `FK_297af4981b95be843253e456b73`");
        await queryRunner.query("ALTER TABLE `agendas` DROP FOREIGN KEY `FK_6bfc09ec1a23e5825e9fb2869be`");
        await queryRunner.query("ALTER TABLE `agendas` DROP FOREIGN KEY `FK_a617d22cd07e17413e0a9946ccc`");
        await queryRunner.query("ALTER TABLE `agendas` DROP FOREIGN KEY `FK_929a8f39c2ec977b2b45e495f20`");
        await queryRunner.query("ALTER TABLE `agendas` DROP FOREIGN KEY `FK_a866fc2bbe534962d49c6e5cf73`");
        await queryRunner.query("ALTER TABLE `profissionais` DROP FOREIGN KEY `FK_99bc7e0958670949b0856a92069`");
        await queryRunner.query("ALTER TABLE `profissionais` DROP FOREIGN KEY `FK_40496560d4944b7b30926abcad7`");
        await queryRunner.query("ALTER TABLE `usuarios` DROP FOREIGN KEY `FK_73d54351ee24fbba1e0699c5c87`");
        await queryRunner.query("ALTER TABLE `usuarios` DROP FOREIGN KEY `FK_daa6f9099a4117b84e09226f53e`");
        await queryRunner.query("ALTER TABLE `filas` DROP FOREIGN KEY `FK_9271bbd8e84a72d676c8f46e776`");
        await queryRunner.query("DROP INDEX `IDX_65b164a4b95170af4d0982050b` ON `anamnesias_usuario_id_usuarios`");
        await queryRunner.query("DROP INDEX `IDX_297af4981b95be843253e456b7` ON `anamnesias_usuario_id_usuarios`");
        await queryRunner.query("DROP TABLE `anamnesias_usuario_id_usuarios`");
        await queryRunner.query("DROP TABLE `anamnesias`");
        await queryRunner.query("DROP TABLE `agendas`");
        await queryRunner.query("DROP TABLE `status`");
        await queryRunner.query("DROP TABLE `servicos`");
        await queryRunner.query("DROP TABLE `profissionais`");
        await queryRunner.query("DROP TABLE `enderecos`");
        await queryRunner.query("DROP TABLE `usuarios`");
        await queryRunner.query("DROP TABLE `permissoes`");
        await queryRunner.query("DROP TABLE `filas`");
    }

}
