import { Links } from "../../models/links";

export const List = (props: { data: Links[] }) => (
	<div class="mb-10 grid grid-cols-1 gap-3 px-3">
		{props.data.map((link) => (
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
);
