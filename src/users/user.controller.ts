import { Controller, Get, Post } from "@nestjs/common";

@Controller('users')
export class UserController {
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
    createuser(){
        return{
            name: 'hieu',
            age: '18',
        }
    }
}