
import { Module } from '@nestjs/common';
import { UserRepository } from './core/repositories/user.repository';
import { UsersCacheMemoryRepository } from './data/cache-memory/users-cache-memory.repository';
import { UsersControllers } from './controllers/users.controller';
import { CreateUserService } from './services/create-user.service';
import { GetAllUsersService } from './services/get-all-users.service';


@Module({
  imports: [],
  controllers: [UsersControllers],
  providers: [{
    provide: UserRepository,
    useClass: UsersCacheMemoryRepository
  },
    CreateUserService,
    GetAllUsersService,
  ],
})
export class AppModule { }
