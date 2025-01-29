import { Links } from "../../models/links";
import { Section } from "../../constants/section";
import type { FC } from "hono/jsx";

export const Lists: FC<{ data: Links[] }> = (props: { data: Links[] }) => {
	// group links by section
	let linkBySection = new Map<string, Links[]>();
	props.data.forEach((link) => {
		let section = Section.get(link.section);
		if (section) {
			if (linkBySection.has(section)) {
				linkBySection.get(section)?.push(link);
			} else {
				linkBySection.set(section, [link]);
			}
		}
	});

	return (
		<div class="grid grid-cols-1">
			{Array.from(linkBySection).map(([section, links]) => (
				<div class="mb-10 grid grid-cols-1 gap-3">
					<h2 class="mb-3 text-center text-lg font-semibold tracking-wide text-gray-50">
						{section}
					</h2>
					{links.map((link) => (
						<a href={link.link} target="_blank" rel="noreferrer">
							<div class="bg-secondry-dark flex justify-between rounded-md p-3">
								<div>
									<p class="font-normal">{link.name}</p>
									<p class="text-xs tracking-wider text-gray-400">
										{link.description}
									</p>
								</div>
								<img
									src="/arrow-right.svg"
									width="16"
									height="16"
									alt="Arrow right icon"
								></img>
							</div>
						</a>
					))}
				</div>
			))}
		</div>
	);
};
