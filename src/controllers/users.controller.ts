import { Body, Controller, Get, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { User } from "src/core/domain/interfaces/user.interface";
import { CreateUserDto } from "src/dtos/create-user.dto";
import { UserService } from "src/services/user.service";


@Controller("/users")
export class UsersControllers {


    constructor(
        private userService: UserService,
    ) { }


    @Post()
    public create(@Body() user: CreateUserDto): Promise<User> {
        return this.userService.create(user)
    }


    @Get()
    public findAll(): Promise<User[]> {
        return this.userService.findAll()
    }
}