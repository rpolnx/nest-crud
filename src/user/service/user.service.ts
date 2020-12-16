import { UserDTO } from '../model/dto/user.dto'

export interface UserService {
    getAll(): Promise<UserDTO[]>

    get(id: string): Promise<UserDTO>

    create(dto: UserDTO): Promise<UserDTO>

    update(dto: UserDTO, id: string): Promise<void>

    delete(id: string): Promise<void>
}
