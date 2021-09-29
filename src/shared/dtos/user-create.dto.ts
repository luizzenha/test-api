import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserCreateDto {
    id?: number;
    
    name: string;
    
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    password: string;
}