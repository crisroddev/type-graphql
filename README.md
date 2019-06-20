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
#### Start Redis => redis-server
#### Add cors

## Auth

```
@Authorized decorator
```
```
Auth Checker
authChecker: ({ context: { req }}) => {
      return !!req.session.userId;
    }
```
```
UseMiddleware() instead of @Authorized
```
```
middleware isAuth middleware logger
```

## Confirmation Email
###Using Nodemailer
```
User.ts entity add 
@Column("bool", { default: false })
  confirmed: boolean
```
### Dependencies
```
yarn add nodemailer uuid
```
### Dependencies
```
yarn add @types/nodemailer @types/uuid
```
### Using Nodemailer sendEmail.ts
### Creating Url for user confirmation createConfirmationUrl.ts
### Create Confirmation Resolver

## Forgot/Change Password
### Forgot password resolver
```
ForgotPassword.ts
```
```
ChangePassword.ts
```
```
ChangePasswordInput.ts
```

## Logout

```
Logout.ts Logout Resolver
```
```
Add to context res
```
```
Clear cookie context.res.clearCookie('qid')
```

## Testings

```
Setting un test enviroment with jest
```
```
yarn add --dev jest typescript ts-jest @types/jest
```
### Start config file
```
yarn ts-jest config:init
```
```
setup.ts call test connection
```
```
Register.test.ts
```


## Higher order resolvers

```

```

