import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey)
