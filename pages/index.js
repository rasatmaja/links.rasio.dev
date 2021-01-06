import Head from 'next/head'

export default function Home() {
  return (
    <div className="p-5">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center text-base text-gray-500 dark:text-gray-300 font-medium">
        <div className="w-28 h-28 bg-gray-400 mx-auto rounded-full mb-5"></div>
        <div className="text-2xl text-gray-700 dark:text-gray-50 font-extrabold">
          Rasio Ganang Atmaja
        </div>
        <div>
          Software Engineer, Researcher 🚀
        </div>
        <div>
          Surabaya, Indonesia 🇮🇩
        </div>
        <img src="/arrow.svg" className="mx-auto my-5" width="20" height="20"></img>
      </div>
    </div>
  )
}
