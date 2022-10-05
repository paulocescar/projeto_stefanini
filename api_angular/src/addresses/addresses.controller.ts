import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddressesService } from './addresses.service';
import { CreateAddressDto, updateAddressDto, findAddressDto, deleteAddressDto } from './dto/address.dto';

@ApiTags('Addresses')
@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Post()
  async create(@Body() createAddressDto: CreateAddressDto) {
    try{
      const user = await this.addressesService.create(createAddressDto);
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
    const allAddress = await this.addressesService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Address created successfully',
      allAddress
    }
  }
  
  @Get(':zipcode')
  findOne(@Param('zipcode') zipcode: string) {
    return this.addressesService.findOne(zipcode);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAddressDto: updateAddressDto) {
    return this.addressesService.update(+id, updateAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressesService.remove(+id);
  }
}
