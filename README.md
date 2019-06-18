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
@InputType()
export class RegisterInput {
    @Field() 
    firstName: string;

    @Field() 
    lastName: string;

    @Field() 
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

```

```

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

