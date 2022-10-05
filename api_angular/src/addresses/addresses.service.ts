import { Body, Injectable } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto, updateAddressDto, findAddressDto, deleteAddressDto } from './dto/address.dto';
import { Address } from './entities/address.entity'

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}
  
  @ApiBody({type: CreateAddressDto})
  async create(@Body() createAddressDto: CreateAddressDto) {
    try{
      const address = this.addressRepository.create(createAddressDto);
      await this.addressRepository.save(createAddressDto);
      return address;
    }catch(e){
      return e;
    }
  }

  async findAll() {
    return await this.addressRepository.find();
  }

  @ApiBody({type: findAddressDto})
  async findOne(zipcode: string) {
    try{
      return await this.addressRepository.findOne({
        where: { zipcode: zipcode}
      });
    }catch(e){
      return e;
    }
  }

  @ApiBody({type: updateAddressDto})
  async update(id: number, updateAddressDto: updateAddressDto): Promise<Address> {
    
    try{
      await this.addressRepository.update(id, 
        {
          zipcode : updateAddressDto.zipcode, 
          street : updateAddressDto.street, 
          district : updateAddressDto.district,  
          city : updateAddressDto.city, 
          state : updateAddressDto.state, 
          country: updateAddressDto.country
        }
      );
      return await this.addressRepository.findOne({
        where: { id: id}
      });
    }catch(e){
      return e;
    }
  }

  @ApiBody({type: deleteAddressDto})
  async remove(id: number) {
    const user = await this.addressRepository.findOne({
      where: { id: id}
    });
    if(user){
      try{
        this.addressRepository.delete(id)
        return "deleted"
      }catch(e){
        return e;
      }
    }

    return "not found"
  }
}
