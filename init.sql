CREATE USER 'admin' WITH PASSWORD 'pass';

CREATE DATABASE 'nest-crud';
\c 'nest-crud';
CREATE SCHEMA 'nest-crud';
REVOKE ALL ON DATABASE 'nest-crud' FROM PUBLIC;
GRANT ALL PRIVILEGES ON DATABASE nest-crud TO 'admin';
GRANT ALL PRIVILEGES ON SCHEMA nest-crud TO 'admin';
