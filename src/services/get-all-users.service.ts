
import { Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Service } from "src/core/base/service";
import { UserCreatedMapper } from "src/core/domain/mappers/user-created.mapper";
import { UserRepository } from "src/core/repositories/user.repository";
import { UserCreatedDto } from "src/shared/dtos/user-created.dto";


@Injectable()
export class GetAllUsersService implements Service<UserCreatedDto[]>{
    private userCreatedMapper: UserCreatedMapper;


    constructor(private readonly repository: UserRepository) {
        this.userCreatedMapper = new UserCreatedMapper();
    }


    public execute(): Observable<UserCreatedDto[]> {
        return this.repository.getAll()
            .pipe(
                map(data => data.map(this.userCreatedMapper.mapTo))
            );
    }


}