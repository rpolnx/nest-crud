--CREATE USER crud_admin WITH PASSWORD 'pass' IF NOT EXISTS;

CREATE DATABASE crud_nest_db;
\c crud_nest_db;
CREATE SCHEMA crud_nest_db;
REVOKE ALL ON DATABASE crud_nest_db FROM PUBLIC;
GRANT ALL PRIVILEGES ON DATABASE crud_nest_db TO admin;
GRANT ALL PRIVILEGES ON SCHEMA crud_nest_db TO admin;
