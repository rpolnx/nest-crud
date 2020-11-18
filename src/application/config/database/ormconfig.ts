import { ConfigService } from '@nestjs/config'

const config: any = async function (configService: ConfigService) {
    return {
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get('DB_USER', 'admin'),
        password: configService.get('DB_PASS', 'pass'),
        database: configService.get('DB_NAME', 'nest-crud'),
        // schema: configService.get('DB_SCHEMA', 'nest-crud'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
        migrationsRun: true,
        logging: true,
        logger: 'file',
        migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
        cli: {
            migrationsDir: 'src/application/config/database/migrations',
        },
    }
}

export = config
