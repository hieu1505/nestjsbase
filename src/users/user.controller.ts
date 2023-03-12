import { Controller,Body,Post, Put, Param, Get } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { UserService } from "./user.service";

@Controller('users')
 export class UserController {
    constructor(private readonly userService: UserService){

    }
    @Post()
    createUser(@Body() user:UserDto):Promise<UserDto>{
        console.log(user);
        return this.userService.save(user);}
    @Put(':id')
    updateUserById(@Param('id')id:number,@Body()user:UserDto):Promise<{result:string}>{
        return this.userService.update(id,user);}
    @Get(':id')
    getById(@Param('id')id:number):Promise<UserDto>{
        console.log(id)
        return this.userService.findOne(id);
    }
 }