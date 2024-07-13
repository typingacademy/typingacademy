import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";
import type { Client, Database } from "./types";

config();

let client: Client;

export const dbClient = (): Client => {
  // Create a single supabase client for interacting with database
  if (!client) {
    client = createClient<Database>(
      process.env.DB_URL as string,
      process.env.DB_ACCESS_TOKEN as string
    );
  }
  return client;
};
