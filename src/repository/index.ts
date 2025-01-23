import { Links } from "../models/links"
import { Context } from 'hono'

export class LinksRepo {
    async get(c: Context) {
        const query = await c.env.DB.prepare('select * from links').all()

        const links: Links[] = query.results

        return links
    }
}
