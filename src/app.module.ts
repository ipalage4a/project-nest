import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'project_nest',
      password: 'project_nest',
      database: 'project_nest',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    TodoModule,
  ],
  providers: [AppService],
})
export class AppModule {}
