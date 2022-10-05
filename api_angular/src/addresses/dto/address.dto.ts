import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty()
  zipcode: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  district: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  country: string;
}
  
export class updateAddressDto {

  @ApiProperty()
  zipcode: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  district: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  country: string;
}
  
export class findAddressDto {
  @ApiProperty()
  zipcode: string;
}
  
export class deleteAddressDto {
  @ApiProperty()
  id: number;
}