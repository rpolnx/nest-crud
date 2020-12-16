import { ConfigService } from '@nestjs/config'
import * as path from 'path'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

const config: any = async function (configService: ConfigService) {
    return {
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get('DB_USER', 'admin'),
        password: configService.get('DB_PASS', 'pass'),
        database: configService.get('DB_NAME', 'nest-crud'),
        schema: configService.get('DB_SCHEMA', 'nest-crud'),
        entities: [path.join(__dirname, '../../../**/*.entity{.ts,.js}')],
        synchronize: false,
        migrationsRun: true,
        logging: true,
        logger: 'file',
        namingStrategy: new SnakeNamingStrategy(),
        migrations: [path.join('dist', 'resources/migrations/*{.ts,.js}')],
        cli: {
            migrationsDir: 'resources/migrations',
        },
    }
}

export = config
