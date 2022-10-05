import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto, createUserDto, updateUserDto } from './dto/user.dto';
import { ApiTags } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';

const saltOrRounds = 4;

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: createUserDto) {
    try{
      createUserDto.password = await bcrypt.hash(createUserDto.password, saltOrRounds);
      const user = await this.usersService.create(createUserDto);
      return {
        statusCode: HttpStatus.OK,
        message: 'User created successfully',
        user
      }

    }catch(error){
      return {
        statusCode: HttpStatus.CONFLICT,
        message: error.sqlMessage
      }
    }
  }

  @Get()
  async findAll() {
    const allUsers = await this.usersService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      allUsers
    }
  }
  
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() userDto: updateUserDto) {
    userDto.password = await bcrypt.hash(userDto.password, saltOrRounds);
    return this.usersService.update(+id, userDto);
  }

  @Delete(':id/delete')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}