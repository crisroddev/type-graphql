import { MaxLength, Length, Max, IsEmail } from "class-validator";
import { InputType, Field } from "type-graphql";

@InputType()
export class RegisterInput {
    @Field() 
    @Length(1, 255)
    firstName: string;

    @Length(1, 255)
    @Field() 
    lastName: string;

    @Field() 
    @IsEmail()
    email: string;

    @Field() 
    password: string;
}