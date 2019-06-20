import { testConn } from "src/test-utils/testConn";
import { Connection } from "typeorm";
import { graphql } from "graphql";

let conn: Connection

beforeAll( async () => {
    await testConn();
})
afterAll( async () => {
    await conn.close()
})

describe('Register', () => {
    it("create user", () => {
       graphql({
           
       })
    })
})