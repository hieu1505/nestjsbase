import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import {ValidationPipe} from '@nestjs/common'

 async function bootstrap(): Promise<void>{
  const app = await NestFactory.create( AppModule);
  const PORT=333;
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(PORT,()=>{
    console.log('app listening on port ${PORT}');
  });
}
bootstrap();
