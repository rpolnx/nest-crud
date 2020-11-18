import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController as UserController } from './controller/user.controller'
import { AppService as UserService } from './service/user.service'
@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST', 'localhost'),
                port: configService.get<number>('DB_PORT', 5432),
                username: configService.get('DB_USER', 'admin'),
                password: configService.get('DB_PASS', 'pass'),
                database: configService.get('DB_NAME', 'nest-crud'),
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
            }),
        }),
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}