import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  __api.env.SVELTE_APP_SUPABASE_URL,
  __api.env.SVELTE_APP_SUPABASE_ANON_KEY
)
