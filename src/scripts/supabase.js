import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://rchvxwxhggxncpajpqvf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjaHZ4d3hoZ2d4bmNwYWpwcXZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwODQ2NDksImV4cCI6MjA1ODY2MDY0OX0.e3xnV60dS7tMXgPjlcjmy3QgMQMD-SVaM78EJ4OEIIQ'

export const supabase = createClient(supabaseUrl, supabaseKey);

