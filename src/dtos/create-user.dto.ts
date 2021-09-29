import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    
    @ApiProperty()
    @IsNotEmpty()
    public first_name: string;

    @ApiProperty()
    @IsNotEmpty()
    last_name: string;
    
    @ApiProperty()
    @IsEmail()
    email: string;
    
    @ApiProperty()
    @IsNotEmpty()
    password: string;
}