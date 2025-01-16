import { Hono } from 'hono'

type Bindings = {
  DB: D1Database; 
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/api/v1/links', async (c) => {
  const links = await c.env.DB.prepare('select * from links').all()
  return c.json(links.results)
})

export default app
