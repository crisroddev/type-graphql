import { Resolver, Mutation, Arg } from "type-graphql";
import * as bcrypt from "bcryptjs";
  
import { User } from "../../entity/User";
  
  @Resolver()
  export class LoginResolver {
    @Mutation(() => User, { nullable: true })
    async login(
      @Arg("email") email: string,
      @Arg("password") password: string
      ): Promise<User | null> {
        const user = await User.findOne({ where: { email }});

        if(!user) {
          return null
        }
        const valid = await bcrypt.compare(password, user.password)

        if(!valid) {
          return null
        }

        return user;

    }
  }
  