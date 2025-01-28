import { Hono, Context } from "hono";
import { LinksRepo } from "../repository";
import { List } from "./components/lists";
import { Layout } from "./layouts";
import { Profile } from "./components/profile";

const pages = new Hono();
const linkRepo = new LinksRepo();

pages.get("/", async (c: Context) => {
	const links = await linkRepo.get(c);
	return c.html(
		<Layout
			children={
				<div>
					<Profile />
					<List data={links} />
				</div>
			}
		/>,
	);
});

export { pages };
