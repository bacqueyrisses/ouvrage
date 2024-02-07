// @ts-check

import fs from "fs/promises";

const KV_REST_API_URL = "";
const KV_REST_API_TOKEN = "";

async function uploadToDB() {
  const wordsFile = "";

  try {
    const wordsJson = await fs.readFile(wordsFile, "utf8");

    await fetch(`${KV_REST_API_URL}/set/json`, {
      headers: {
        Authorization: `Bearer ${KV_REST_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: wordsJson,
      method: "PUT",
    });

    console.log("✔ JSON data stored successfully");
  } catch (error) {
    console.error("Error uploading JSON data:", error);
  }
}

void uploadToDB();
