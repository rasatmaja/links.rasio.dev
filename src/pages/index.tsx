import { Hono, Context } from "hono";
import { LinksRepo } from "../repository";
import { Lists } from "./components/lists";
import { Layout } from "./layouts";
import { Profile } from "./components/profile";
import { Footer } from "./components/footer";

const pages = new Hono();
const linkRepo = new LinksRepo();

pages.get("/", async (c: Context) => {
	const links = await linkRepo.get(c);
	return c.html(
		<Layout
			children={
				<div>
					<Profile />
					<Lists data={links} />
					<Footer />
				</div>
			}
		/>,
	);
});

export { pages };
