import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from '../user/user.module'
import * as config from './config/database/ormconfig'
@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule, UserModule],
            inject: [ConfigService],
            useFactory: config,
        }),
    ],
})
export class AppModule {}
