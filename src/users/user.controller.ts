import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import console from "console";
import { UserDto } from "./user.dto";

@Controller('users')
export class UserController {
    @UsePipes(new ValidationPipe())
    @Get()
    getallusers(){
        return [{
            name: 'hieu',
            age:'18'
        },{
            name: 'binh',
            age:'20',
        }]
    }
    @Post()
    createuser(@Body() user:UserDto):UserDto{
        user.createdAt=new Date();
        user.id=1;
        user.updatedAt= new Date();
        // const userReal=plainToClass(UserDto,user,{excludeExtraneousValues:true});
        // console.log(userReal);
       return UserDto.plainToClass(user);
    }
    @Get(':id')
    getUserById(@Param('id') id:number){
        console.log(id);
        return 'test'
    }
}