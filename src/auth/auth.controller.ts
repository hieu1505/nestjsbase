import { Controller,Body,Post, Put, Param, Get } from "@nestjs/common";
import { AuthSevice } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor (private authService: AuthSevice){
      
    }
    @Post('register')
    register(){

    }
    @Post('login')
    login(){

    }
}