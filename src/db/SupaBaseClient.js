
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://wbzudlbqgqnjflugkxtj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndienVkbGJxZ3FuamZsdWdreHRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMzE5OTcsImV4cCI6MjAxNjkwNzk5N30.ITZ3fKN-d26XAJXvMsG4W2FlgB0b4Y3edFQXtRQqEoE'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;