import { Body, HttpStatus, Injectable } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUserDto, findUserDto, updateUserDto, deleteUserDto} from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  
  @ApiBody({type: createUserDto})
  async create(@Body() createUserDto: createUserDto) {
    try{
      const user = this.usersRepository.create(createUserDto);
      await this.usersRepository.save(createUserDto);
      return user;
    }catch(e){
      return e;
    }
  }

  async findAll() {
    return await this.usersRepository.find({ relations: ['addresses']});
  }

  @ApiBody({type: findUserDto})
  async findOne(id: number) {
    try{
      return await this.usersRepository.findOne({
        where: { id: id}
      });
    }catch(e){
      return e;
    }
  }

  @ApiBody({type: updateUserDto})
  async update(id: number, userDto: updateUserDto): Promise<User> {
    
    try{
      const user = await this.usersRepository.update(id, 
        {
          username : userDto.username, 
          email : userDto.email, 
          firstName : userDto.firstName, 
          lastName : userDto.lastName,  
          password : userDto.password, 
          isActive: userDto.isActive, 
          address_id: userDto.address_id
        }
      );
      return await this.usersRepository.findOne({
        where: { id: id}
      });
    }catch(e){
      return e;
    }
  }

  @ApiBody({type: deleteUserDto})
  async remove(id: number) {
    const user = await this.usersRepository.findOne({
      where: { id: id}
    });
    if(user){
      try{
        this.usersRepository.delete(id)
        return {
          statusCode: HttpStatus.OK,
          message: 'User deleted successfully',
        }
      }catch(e){
        return e;
      }
    }

    return "not found"
  }
}
