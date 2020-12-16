import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserDTO } from '../model/dto/user.dto'
import { User } from '../model/entity/user.entity'
import { UserService } from './user.service'

@Injectable()
export class UserServiceImpl implements UserService {
    constructor(@InjectRepository(User) private repository: Repository<User>) {}

    async getAll(): Promise<UserDTO[]> {
        return this.repository.find()
    }

    async get(id: string): Promise<UserDTO> {
        const user: UserDTO = await this.repository.findOne(id)

        if (!user) {
            throw new NotFoundException('User not found')
        }

        return user
    }

    async create(dto: UserDTO): Promise<UserDTO> {
        const user: User = { ...dto, isActive: true }
        const created = await this.repository.save(user)

        return created
    }

    async update(dto: UserDTO, id: string): Promise<void> {
        const user: User = await this.repository.findOne(id)

        if (!user) {
            throw new NotFoundException('User not found')
        }

        const updated = { ...user, ...dto, id }

        await this.repository.update(id, updated)
    }

    async delete(id: string): Promise<void> {
        const user: User = await this.repository.findOne(id)

        if (!user) {
            throw new NotFoundException('User not found')
        }

        await this.repository.delete(user)
    }
}
