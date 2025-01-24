import { Hono, Context } from "hono";
import { LinksRepo } from "../repository";
import { List } from "./components/lists";
import { Layout } from "./layouts";

const pages = new Hono();
const linkRepo = new LinksRepo();

pages.get("/", async (c: Context) => {
	const links = await linkRepo.get(c);
	return c.html(<Layout title="Home" children={<List data={links} />} />);
});

export { pages };
