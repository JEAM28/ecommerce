import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

const config = {
  type: 'postgres',
  host: `${process.env.DB_HOST}`,
  port: `${process.env.DB_PORT}`,
  username: `${process.env.DB_USERNAME}`,
  password: `${process.env.DB_PASSWORD}`,
  database: `${process.env.DB_NAME}`,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  synchronize: true, // Solo para desarrollo, no usar en produccion
  logging: false,
  dropSchema: true,
  autoLoadEntities: true,
};

export default registerAs('typeorm', () => config); // esta linea es para configModule
export const connectioSource = new DataSource(config as DataSourceOptions); //esta linea es para leer las migraciones
