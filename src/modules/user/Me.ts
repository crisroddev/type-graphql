import { MyContext } from './../../types/MyContext';
import { Resolver, Query, Ctx } from "type-graphql";
  
import { User } from "../../entity/User";
  
  @Resolver()
  export class MeResolver {
    @Query(() => User, { nullable: true})
    async me(@Ctx() context: MyContext): Promise<User | undefined> {
      if(!context.req.session!.userId) {
          return undefined;
      }
      return User.findOne(context.req.session!.userId)
    }
  }
  