import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

/* // db schema: prisma/schema.prisma
db.snippet.create({
  data: {
    title: "Title",
    code: "const abc = () => {}",
  },
});
*/
