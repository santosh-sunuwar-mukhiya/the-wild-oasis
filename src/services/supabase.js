import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://tehufiqunvwnpgynhgxu.supabase.co';

const supabaseKey = 'sb_publishable_ScfUTgY2AYArU97DeOS09Q_zi-tr_Ap';

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;