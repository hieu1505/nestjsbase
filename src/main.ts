import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

 async function bootstrap(): Promise<void>{
  const app = await NestFactory.create( AppModule);
  const PORT=333;
  await app.listen(PORT,()=>{
    console.log('app listening on port ${PORT}');
  });
}
bootstrap();
