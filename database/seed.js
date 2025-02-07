import { faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

function logErrorAndExit(tableName, error) {
  console.error(
    `An error occurred in table '${tableName}' with code ${error.code}: ${error.message}`
  )
  process.exit(1)
}

function logStep(stepMessage) {
  console.log(stepMessage)
}

async function seedProjects(num) {
  logStep('Seeding projects...')
  const projects = []

  for (let i = 0; i < num; i++) {
    const name = faker.lorem.words(3)

    projects.push({
      name,
      slug: name.toLocaleLowerCase().replace(/ /g, '-'),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3, 4, 5])
    })
  }
  const { data, error } = await supabase.from('projects').insert(projects).select('id')

  if (error) return logErrorAndExit('Projects', error)

  logStep('Projects seeded successfully.')

  return data
}

// eslint-disable-next-line antfu/no-top-level-await
await seedProjects(10)
