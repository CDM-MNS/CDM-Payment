import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {ClientsModule, Transport} from "@nestjs/microservices";



@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
      }
    ),
  ],  controllers: [],
  providers: [],
})
export class AppModule {}
