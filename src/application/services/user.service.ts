import { Inject } from '@nestjs/common';
import { BaseService } from './base.service';
import { UserRepository } from '@/infrastructure/database/repositories/user.repository';
import { CreateUserDto } from '@/infrastructure/http/dtos/create-user.dto';

export class UserService extends BaseService {
    constructor(
        @Inject(UserRepository) private userRepository: UserRepository,
    ) {
        super(UserService.name);
    }

    async getAllUsers() {
        return await this.userRepository.findAll();
    }

    async getOneUser(id: string) {
        return await this.userRepository.findOne({ where: { id } });
    }

    async createUser(data: CreateUserDto) {
        return await this.userRepository.create(data);
    }
}
