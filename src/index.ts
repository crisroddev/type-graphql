import "reflect-metadata";
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema, Resolver, Query } from 'type-graphql';

@Resolver()
class HelloResolver {
    @Query(() => String, { name: "helloWorld"})
    async hello() {
        return "Hello World"
    }
}


const main = async () => {
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
