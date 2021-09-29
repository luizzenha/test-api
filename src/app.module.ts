
import { Module } from '@nestjs/common';
import { UsersControllers } from './controllers/users.controller';
import { DatabaseModule } from './core/database.module';
import { userProviders } from './core/providers/user.providers';
import { UserService } from './services/user.service';


@Module({
  imports: [DatabaseModule],
  controllers: [UsersControllers],
  providers: [
    UserService,
    ...userProviders ,
  ],
  
})
export class AppModule { }
