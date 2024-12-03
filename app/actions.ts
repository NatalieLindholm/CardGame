"use server";
import { sql } from "@vercel/postgres";

export async function saveDb(userScore: number, botScore: number) {
  const { rows } =
    await sql`INSERT INTO scores(userscore, botscore) VALUES(${userScore}, ${botScore} )`;
}

export async function getDb() {
  try {
    const { rows } = await sql`
        SELECT userScore, botScore FROM scores;
      `;
    return rows;
  } catch (error) {
    console.error("Error fetching data from the database:", error);
    throw error;
  }
}
