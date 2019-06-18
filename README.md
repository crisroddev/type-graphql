# Type GraphQL with Postgres DB

Basic Graphql using Postgres Database with typescript

## Setup
###  First Dependencies
```
yarn add apollo-server-express express graphql reflect-metadata type-graphql
```
###  Dev Dependencies
```
yarn add -D @types/express @types/graphql @types/node nodemon ts-node typescript
```
### tsconfig file

## Register 

### Dependencies
```
yarn add pg typeorm bcryptjs
```
### Dev Dependencies
```
yarn add -D @types/bcryptjs
```
### ormconfig.json file
### User.ts entity for user table

## Validation
### Dependencies
```
yarn add ts-node-dev --dev yarn add class-validator
```
### Adding decorators to tsconfig
```
esModuleInterop: True allowSyntheticDefaultImports: True
```
### Using class-validators on RegisterInput
#### Create for example an input field
```
@@InputType()
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
```
#### Using this Input on Register Mutation
```
@Mutation(() => User)
    async register(
      @Arg("data") { 
        email, 
        firstName, 
        lastName, 
        password }: RegisterInput
```

## Login
### Dependencies
```
yarn add express-session connect-redis ioredis cors
```
### Dev Dependencies
```
yarn add @types/express-session @types/connect-redis @types/ioredis @types/cors
```
#### Index.ts add session middleware
```
 app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      name: "qid",
      secret: "hgfsagfsghfsah41341",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 + 365 // 7 years
      },
    }  )
  )
```
#### Create context on ApolloServer
```
context: ({ req }: any ) => ({ req })
```
#### Add cors

## Auth

```

```

## Confirmation Email

```

```

## Forgot/Change Password

```

```

## Logout

```

```

## Testings

```

```

## Higher order resolvers

```

```

