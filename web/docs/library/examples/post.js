/**
 * post.mdx examples
 */

export const postSingleJs = `
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://world.supabase.co', '1a2b-3c4d-5e6f-7g8h')

const getCities = async () => {
  try {
    let cities = await supabase
      .from('cities')
      .insert([
        { name: 'The Shire', country_id: 554 }
      ])
    return cities
  } catch (error) {
    console.log('Error: ', error)
  }
}
`

export const postBulkJs = `
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://world.supabase.co', '1a2b-3c4d-5e6f-7g8h')

const createCities = async () => {
  try {
    let cities = await supabase
      .from('cities')
      .insert([
        { name: 'The Shire', country_id: 554 },
        { name: 'Rohan', country_id: 555 },
      ])
    return cities
  } catch (error) {
    console.log('Error: ', error)
  }
}
`