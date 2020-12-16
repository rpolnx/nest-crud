import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from './controller/user.controller'
import { User } from './model/entity/user.entity'
import { UserServiceImpl } from './service/user.service.impl'
@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [
        {
            provide: 'UserService',
            useClass: UserServiceImpl,
        },
    ],
    exports: [TypeOrmModule],
})
export class UserModule {}
