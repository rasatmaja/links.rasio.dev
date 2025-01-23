import { Hono, Context } from 'hono'
import { LinksRepo } from '../repository'
import { Links } from "../models/links"

const page = new Hono()
const linkRepo = new LinksRepo

page.get("/", async (c: Context) => {

  const links = await linkRepo.get(c)

  return c.html(
    <List data={links} />
  )
})

const List = (props: { data: Links[] }) => (
  <>
    <h1>Links</h1>
    <ul>
      {props.data.map((link) => (
        <li>
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
    </ul>
  </>
)

export { page }