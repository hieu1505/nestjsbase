import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm/dist";
import { AuthModule } from "./auth/auth.module";
import { UserEntity } from "./users/user.entity";
import { UserModule } from "./users/user.module";

@Module({
    
    imports:[ TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        database: 'nodebasic',
        entities: [UserEntity],
        synchronize: true,
      }),UserModule,AuthModule]
})
export class AppModule{

}