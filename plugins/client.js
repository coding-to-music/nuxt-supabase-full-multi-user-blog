import { createClient } from '@supabase/supabase-js'

const NUXT_ENV_SUPABASE_PROJECT_URL = process.env.NUXT_ENV_SUPABASE_PROJECT_URL;
const NUXT_ENV_SUPBASE_ANON_API_KEY = process.env.NUXT_ENV_SUPBASE_ANON_API_KEY;

// console.log(process.env.NUXT_ENV_SUPABASE_PROJECT_URL);
// console.log(process.env.NUXT_ENV_SUPBASE_ANON_API_KEY);

const supabase = createClient(
  NUXT_ENV_SUPABASE_PROJECT_URL,
  NUXT_ENV_SUPBASE_ANON_API_KEY
  )

export default (_, inject) => {
  inject('supabase', supabase)
}