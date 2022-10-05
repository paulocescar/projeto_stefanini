import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from '../users/entities/user.entity';
import { Address } from '../addresses/entities/address.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User, Address])],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
