import { Links } from "../../models/links";

export const List = (props: { data: Links[] }) => (
	<>
		<h1 class="text-2xl font-bold text-blue-500">Links</h1>
		<ul>
			{props.data.map((link) => (
				<li>
					<a href={link.link}>{link.name}</a>
				</li>
			))}
		</ul>
	</>
);
