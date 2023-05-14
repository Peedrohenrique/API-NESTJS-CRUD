import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository:typeof UserEntity
  ){}

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findByPk(id);

    if (!user) {
      throw new NotFoundException(`Usuário com ID '${id}' não encontrado`);
    }

    return user;
  }

  async create(dto: CreateUserDto) {
    return await this.userRepository.create({
      ...dto,
    });
  }

  async update(id: number, dto: UpdateUserDto) {
    const user = await this.userRepository.findByPk(id);

    if (!user) {
      throw new NotFoundException(`Usuário com ID '${id}' não encontrado`);
    }
    return await user.update(dto);
  }

  async remove(id: number) {
    const user = await this.userRepository.findByPk(id);

    if (!user) {
      throw new NotFoundException(`Usuário com ID '${id}' não encontrado`);
    }

    return await user.destroy();
  }
}
