create database if not exists empresa;
use empresa;
create table if not exists solicitante(id int auto increment primary key, solicitante);
create table if not exists usuarios(id int auto increment primary key, nombre varchar, activo int);
create table if not exists auth(id int, usuario varchar, password varchar);