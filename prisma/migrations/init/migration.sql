-- CreateTable
CREATE TABLE `api_results` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `brand` TEXT NOT NULL,
    `model` TEXT NOT NULL,
    `res_before` INTEGER NOT NULL,
    `res_after` INTEGER NOT NULL,
    `workshop` TEXT NOT NULL,
    `zip` TEXT NOT NULL,
    `city` TEXT NOT NULL,
    `language` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `api_users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` TEXT NOT NULL,
    `lastname` TEXT NOT NULL,
    `phone` TEXT NOT NULL,
    `email` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `aw_field_test` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `country` TEXT NOT NULL,
    `license` TEXT NOT NULL,
    `type` TEXT NOT NULL,
    `date` TEXT NOT NULL,
    `result` TEXT NOT NULL,
    `smell` TEXT NOT NULL,
    `method` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `aw_result` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` TEXT NOT NULL,
    `brand` TEXT NOT NULL,
    `model` TEXT NOT NULL,
    `result_before` INTEGER NOT NULL,
    `result_after` INTEGER NOT NULL,
    `workshop` TEXT NOT NULL,
    `zip` TEXT NOT NULL,
    `residence` TEXT NOT NULL,
    `language` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `awrc_v2_roles` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(255) NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `awrc_v2_users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `password` VARCHAR(255) NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `brands` (
    `brand_id` INTEGER NOT NULL,
    `brand_name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`brand_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `logos` (
    `workshop_id` VARCHAR(255) NOT NULL,
    `logo_filename` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`workshop_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reports` (
    `id` VARCHAR(255) NOT NULL,
    `workshop_id` VARCHAR(255) NOT NULL,
    `driver_first_name` VARCHAR(255) NULL,
    `driver_last_name` VARCHAR(255) NULL,
    `driver_street` VARCHAR(255) NULL,
    `driver_zip` VARCHAR(255) NULL,
    `driver_city` VARCHAR(255) NULL,
    `car_manufacturer` VARCHAR(255) NULL,
    `car_model` VARCHAR(255) NULL,
    `car_license` VARCHAR(255) NULL,
    `result_before` VARCHAR(255) NULL,
    `result_after` VARCHAR(255) NULL,
    `recommendation` VARCHAR(255) NULL,
    `month` VARCHAR(255) NULL,
    `year` VARCHAR(255) NULL,
    `pf_cleaning` VARCHAR(255) NULL,
    `ev_cleaning` VARCHAR(255) NULL,
    `pf_change` VARCHAR(255) NULL,
    `created_user_id` VARCHAR(255) NOT NULL,
    `created_on` DATETIME(0) NOT NULL,
    `last_modified` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `strings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `string_name` TEXT NOT NULL,
    `string_lang` TEXT NOT NULL,
    `string_value` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(255) NOT NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `language` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `registered` DATETIME(0) NOT NULL,
    `workshop_id` VARCHAR(255) NULL,
    `last_login` DATETIME(0) NULL,
    `dsgvo` BOOLEAN NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `workshop_brands` (
    `workshop_id` INTEGER NOT NULL,
    `brand_id` INTEGER NOT NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `workshops` (
    `id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `street` VARCHAR(255) NOT NULL,
    `zip_code` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `logo_id` VARCHAR(255) NOT NULL,
    `registered` DATETIME(0) NOT NULL,
    `last_change` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

