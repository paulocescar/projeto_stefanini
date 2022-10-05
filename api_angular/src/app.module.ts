import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AddressesModule } from './addresses/addresses.module';
import { UsersModule } from './users/users.module';

import { Address } from './addresses/entities/address.entity'
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'sicoob',
      entities: [Address, User],
      autoLoadEntities: true,
      synchronize: true,
    }),
    AddressesModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
