import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthSevice } from "./auth.service";
@Module({
    controllers:[AuthController],
    providers:[AuthSevice]
})
export class AuthModule {
    
}