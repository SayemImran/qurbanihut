import "server-only";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.AUTH_DB_URI);
await client.connect();
const db = client.db();
export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, { client }),
  user: {
    additionalFields: {
      profileImage: {
        type: "string",
        required: false,
      },
    },
  },
});
