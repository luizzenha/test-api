import { Body, Controller, Get, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { UserCreateDto } from "src/shared/dtos/user-create.dto";
import { UserCreatedDto } from "src/shared/dtos/user-created.dto";
import { CreateUserService } from "src/services/create-user.service";
import { GetAllUsersService } from "src/services/get-all-users.service";


@Controller("/users")
export class UsersControllers {


    constructor(
        private createUserUserCase: CreateUserService,
        private getAllUsersUserCase: GetAllUsersService
    ) { }


    @Post()
    public create(@Body() user: UserCreateDto): Observable<UserCreatedDto> {
        return this.createUserUserCase.execute(user);
    }


    @Get()
    public findAll(): Observable<UserCreatedDto[]> {
        return this.getAllUsersUserCase.execute()
    }
}