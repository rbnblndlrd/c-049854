// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hgnehytgabtciltgvmcf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnbmVoeXRnYWJ0Y2lsdGd2bWNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwODM3NjYsImV4cCI6MjA2NDY1OTc2Nn0.beiABo6Kr0gBi0I9YDq2nyfnp7O8VoKOGy-AImOqx_o";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);