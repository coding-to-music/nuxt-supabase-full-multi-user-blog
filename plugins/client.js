import { createClient } from '@supabase/supabase-js'

const SUPABASE_PROJECT_URL = process.env.SUPABASE_PROJECT_URL;
const SUPBASE_ANON_API_KEY = process.env.SUPBASE_ANON_API_KEY;

// console.log(process.env.SUPABASE_PROJECT_URL);
// console.log(process.env.SUPBASE_ANON_API_KEY);

const supabase = createClient(
  SUPABASE_PROJECT_URL,
  SUPBASE_ANON_API_KEY
  )

export default (_, inject) => {
  inject('supabase', supabase)
}