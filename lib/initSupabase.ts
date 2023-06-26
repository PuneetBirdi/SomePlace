import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

 const supabaseUrl = 'https://ltufhcmsljssbwahmpym.supabase.co'
 const supabaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0dWZoY21zbGpzc2J3YWhtcHltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc4MTc1NjksImV4cCI6MjAwMzM5MzU2OX0.fRlbUtwGQGY2GzQDNMXnvN2BbZ1hDZMRAtASOLzKYFc'


export const supabase = createClient(supabaseUrl, supabaseApiKey, {
  localStorage: AsyncStorage as any,
})
