import { Repository } from "typeorm";
import { BaseEntity } from "./base.entity";

export class MysqlBaseEntity <Entity extends BaseEntity>{
    constructor (protected repo:Repository<Entity>){

    }
//     async save(userDto: UserDto):Promise<UserDto>{
//         const saveuser= await this.repo.save(userDto);
//       return  plainToInstance(UserDto,saveuser);
//     }
//     async update(id:number,userDto:UserDto):Promise<{result:string}>{
//       const updateResult= await this.repo.update(id,userDto);
//       return  {result:'success'}
//     }
//    async findOne(id: number):Promise<UserDto>{
//       const user=await this.repo.findOneBy({id})
//       return plainToInstance(UserDto,user,{excludeExtraneousValues:true});
//     }
}