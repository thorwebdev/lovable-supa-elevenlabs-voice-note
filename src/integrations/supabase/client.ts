// This file is automatically generated. Do not edit it directly.
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = "https://qpqfxqbknbvdhjfkdatg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwcWZ4cWJrbmJ2ZGhqZmtkYXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1Mzc5ODgsImV4cCI6MjA1NTExMzk4OH0.6wNWvhJWvxNm9ooNSZhspFtVn9JQ_4VFu_UdWMlygh8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
