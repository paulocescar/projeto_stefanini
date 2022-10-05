import { ApiProperty } from '@nestjs/swagger';
import { Address } from 'src/addresses/entities/address.entity';

export class UserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  password: string;

  @ApiProperty()
  address_id: number;

  @ApiProperty()
  addresses: Address;
}

export class createUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  password: string;
  
  @ApiProperty()
  address_id: number;

}

export class updateUserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  password: string;
  
  @ApiProperty()
  address_id: number;
}

export class findUserDto {
  @ApiProperty()
  username: string;
}

export class deleteUserDto {
  @ApiProperty()
  id: number;
}