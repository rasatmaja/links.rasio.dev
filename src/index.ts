import { Hono } from 'hono'

type Bindings = {}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/api/hello', (c) => {
  return c.json({
    ok: true,
    message: 'Hello Hono!',
  })
})

export default app
