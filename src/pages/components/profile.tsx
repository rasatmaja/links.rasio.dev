export const Profile = () => (
    <>
        <div class="flex flex-col items-center text-center text-base text-gray-300 font-medium">
            <img
                src="/me.jpg"
                alt="Rasio Ganang Atmaja Photo Profile"
                width={100}
                height={100}
                class="rounded-full my-5"
            />
            <div class="text-2xl text-gray-50 font-bold">
                Rasio Ganang Atmaja
            </div>
            <div class="font-light text-sm text-gray-400">
                Software Engineer, Researcher
            </div>
            <div class="font-light text-sm text-gray-400">
                Indonesia
            </div>
            <img
                src="/arrow.svg"
                alt="Arrow Down Icon"
                className="mx-auto my-5 animate-bounce"
                width={16}
                height={16}>
            </img>
        </div>
    </>
);
