import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BadRequestException } from '@nestjs/common';
import { VerifyUserData } from './dto/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const findUser = await this.usersRepository.findOneBy({ email: createUserDto.email })
        if (findUser) {
            console.log("ERROR")
            throw new BadRequestException('Пользователь уже существует')
        }
        const user = this.usersRepository.create(createUserDto);
        return await this.usersRepository.save(user);
    }

    async verifyUser(userData: VerifyUserData): Promise<User> {
        const user = await this.usersRepository.findOneBy({ email: userData.email });
        if (!user) {
            throw new BadRequestException('Пользователь не найден')
        }
        const res = await bcrypt.compare(userData.password, user.password);
        if (!res) {
            throw new BadRequestException('Неправильный пароль')
        }
        return user;
    }
}
