import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common'
import { UserDTO } from '../model/dto/user.dto'
import { UserService } from '../service/user.service'

@Controller('users')
export class UserController {
    constructor(@Inject('UserService') private readonly userService: UserService) {}

    @Get()
    async getAll(): Promise<UserDTO[]> {
        return this.userService.getAll()
    }

    @Get(':id')
    async getSingle(@Param('id') id: string): Promise<UserDTO> {
        return this.userService.get(id)
    }

    @Post()
    async create(@Body() dto: UserDTO): Promise<UserDTO> {
        return this.userService.create(dto)
    }

    @Put(':id')
    async update(@Body() dto: UserDTO, @Param('id') id: string): Promise<void> {
        return this.userService.update(dto, id)
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.userService.delete(id)
    }
}
