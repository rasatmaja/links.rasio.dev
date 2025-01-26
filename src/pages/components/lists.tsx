import { Links } from "../../models/links";

export const List = (props: { data: Links[] }) => (
	<div class="px-3 grid grid-cols-1 gap-3 mb-10">
		{props.data.map((link) => (
			<a href={link.link} target="_blank" rel="noreferrer">
				<div class="bg-secondry-dark p-3 rounded-md flex justify-between">
					<div>
						<p class="font-normal">{link.name}</p>
						<p class="text-xs text-gray-400 tracking-wider">{link.description}</p>
					</div>
					<img src="/arrow-right.svg" width="16" height="16" alt="Arrow right icon"></img>
				</div>
			</a>
		))}
	</div>
);
