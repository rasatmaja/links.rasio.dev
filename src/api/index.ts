import { Hono, Context } from "hono";
import { LinksRepo } from "../repository";

const api = new Hono();
const linkRepo = new LinksRepo();

api.get("/v1/links", async (c: Context) => {
	const links = await linkRepo.get(c);

	return c.json(links);
});

export { api };
