import { Hono } from 'hono'
import { api } from './api/index'
import { page } from './page';

type Bindings = {
    DB: D1Database;
}

const app = new Hono<{ Bindings: Bindings }>()

// Mount api
app.route("/api", api)

// Mount page
app.route("", page)

export default app
