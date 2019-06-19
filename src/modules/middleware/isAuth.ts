import { MyContext } from './../../types/MyContext';
import { MiddlewareFn } from 'type-graphql';

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
    if(!context.req.session!.uderId){
        throw new Error('Not Authenticated')
    }
    return next();
};