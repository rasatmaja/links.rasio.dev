export const Profile = () => (
	<>
		<div class="flex flex-col items-center text-center text-base font-medium text-gray-300">
			<img
				src="/me.jpg"
				alt="Rasio Ganang Atmaja Photo Profile"
				width={100}
				height={100}
				class="my-5 rounded-full"
			/>
			<div class="text-2xl font-bold text-gray-50">Rasio Ganang Atmaja</div>
			<div class="text-sm font-light text-gray-400">
				Software Engineer, Researcher
			</div>
			<div class="text-sm font-light text-gray-400">Indonesia</div>
			<img
				src="/arrow.svg"
				alt="Arrow Down Icon"
				className="mx-auto my-5 animate-bounce"
				width={16}
				height={16}
			></img>
		</div>
	</>
);
