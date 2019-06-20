import { MyContext } from './../../types/MyContext';
import { ChangePasswordInput } from './changePassword/ChangePasswordInput';
import bcrypt from 'bcryptjs';
import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import { User } from "../../entity/User";
import { redis } from "../../redis";
import { forgotPasswordPrefix } from "../constants/redixPrefixes";



@Resolver()
export class ChangePasswordResolver {
  @Mutation(() => User, { nullable: true })
  async changePassword(@Arg("data") {
      token, 
      password}: 
      ChangePasswordInput,
      @Ctx() context: MyContext
  ): Promise<User | null> {
   const userId = await redis.get(forgotPasswordPrefix + token);
   if(!userId) {
       return null
   }
    const user = await User.findOne(userId);
    if(!user) {
        return null
    }

    await redis.del(forgotPasswordPrefix + token);

    user.password = await bcrypt.hash(password, 12);

    context.req.session!.userId = user.id;

    user.save();
    return user;
  }
}