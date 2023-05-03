import fs from "fs";
import iconv from "iconv-lite";

import pg from "pg";

const { Pool } = pg;
require("dotenv").config();

const pool = new Pool({
  connectionString:
    "postgres://default:Ksq3pYc9BuFN@ep-white-queen-387975-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
});

let file = fs
  .readFileSync("/Users/enzobacqueyrisses/Desktop/MOTS.txt")
  .toString()
  .split("\n");

file.shift();

let words = file.map((element) => {
  return element
    .trim()
    .replace("<div>", "")
    .replace(" </div>", "")
    .replace("</div>", "")
    .split(":")
    .map((e) => e.trim())
    .map(function (byteArray) {
      return iconv.decode(byteArray, "windows-1252");
    });
});

words = words.filter((subArr) => !subArr.includes(""));
words = words.filter((subArr) => !subArr.includes("<br>"));

const sql = `INSERT INTO "Word" (title, description) VALUES ($1, $2) ON CONFLICT (title) DO UPDATE SET description = $2`;

async function insertWords(values) {
  try {
    await pool.query(sql, [values[0], values[1]]);
  } catch (error) {
    console.log(error);
  }
}

console.log(words);

words.forEach((word) => {
  void insertWords(word);
});
