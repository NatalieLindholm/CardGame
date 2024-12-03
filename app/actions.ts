"use server";
import { sql } from "@vercel/postgres";

export async function saveDb(userScore: number, botScore: number) {
  const { rows } =
    await sql`INSERT INTO scores(userscore, botscore) VALUES(${userScore}, ${botScore} )`;
}
