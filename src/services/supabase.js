import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://tehufiqunvwnpgynhgxu.supabase.co', 'sb_publishable_ScfUTgY2AYArU97DeOS09Q_zi-tr_Ap');

export default supabase;