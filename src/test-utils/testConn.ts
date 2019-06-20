import { createConnection } from "typeorm";

export const testConn = (drop: boolean = false) => {
  return createConnection({
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "graphql_ts",
    synchronize: drop,
    dropSchema: drop,
    entities: ["src/entity/*.*"]
  });
};