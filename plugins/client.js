import { createClient } from '@supabase/supabase-js'

// import.meta.env.SNOWPACK_PUBLIC_SUPABASE_URL,
// import.meta.env.SNOWPACK_PUBLIC_SUPABASE_KEY,

// const SUPABASE_PROJECT_URL = import.meta.env.SUPABASE_PROJECT_URL;
// const SUPBASE_ANON_API_KEY = import.meta.env.SUPBASE_ANON_API_KEY;

const SUPABASE_PROJECT_URL = process.env.SUPABASE_PROJECT_URL;
const SUPBASE_ANON_API_KEY = process.env.SUPBASE_ANON_API_KEY;

console.log(SUPABASE_PROJECT_URL);
console.log(SUPBASE_ANON_API_KEY);


const supabase = createClient(
  SUPABASE_PROJECT_URL,
  SUPBASE_ANON_API_KEY
  // process.env.SUPABASE_PROJECT_URL,
  // process.env.SUPBASE_ANON_API_KEY
  )

export default (_, inject) => {
  inject('supabase', supabase)
}