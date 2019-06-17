import "reflect-metadata";
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema, Resolver, Query } from 'type-graphql';
import { createConnection } from "typeorm";

@Resolver()
class HelloResolver {
    @Query(() => String)
    async hello() {
        return "Hello World"
    }
}


const main = async () => {
    await createConnection();
    const schema = await buildSchema({
        resolvers: [HelloResolver],
    });
    
    const apolloServer = new ApolloServer({schema});

    const app = express();
    apolloServer.applyMiddleware({ app });
    const port = 4000;
    app.listen(port, () => {
        console.log(`Server Started on http://localhost:${port}/graphql`)
    })

}

main();
