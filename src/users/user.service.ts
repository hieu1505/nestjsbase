import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from "class-transformer";
import { Repository } from 'typeorm';
import { UserDto } from "./user.dto";
import { UserEntity } from "./user.entity";
@Injectable()
export class UserService{
    constructor(@InjectRepository(UserEntity) private   userRepository: Repository<UserEntity>){
        
    }
    async save(userDto: UserDto):Promise<UserDto>{
        const saveuser= await this.userRepository.save(userDto);
      return  plainToInstance(UserDto,saveuser);
    }
    async update(id:number,userDto:UserDto):Promise<{result:string}>{
      const updateResult= await this.userRepository.update(id,userDto);
      return  {result:'success'}
    }
   async findOne(id: number):Promise<UserDto>{
      const user=await this.userRepository.findOneBy({id})
      return plainToInstance(UserDto,user,{excludeExtraneousValues:true});
    }
}