// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://mtfdwiqwzqermsahtmri.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10ZmR3aXF3enFlcm1zYWh0bXJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5Mjg0NTEsImV4cCI6MjA2MDUwNDQ1MX0.373eKM_qDw7OViOFsF-Io1CV6cE2TUXiQ7z_IZu5uCQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);