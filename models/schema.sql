drop database if exists marketplace;
create database marketplace;


drop table if exists products;
CREATE TABLE `products` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`product_name` VARCHAR( 255 ) NOT NULL,
	`description` VARCHAR(255) NOT NULL,
    `image url` VARCHAR(255) not null,
    `password` VARCHAR(30) not null,
    `tags` varchar(255) not null,
	/* Set ID as primary key */
	PRIMARY KEY ( `id` )
);


drop table if exists categories;
CREATE TABLE `categories` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`category_name` VARCHAR( 50 ) NOT NULL,
	PRIMARY KEY ( `id` )
);
