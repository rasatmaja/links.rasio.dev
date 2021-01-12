import Head from 'next/head'
import Image from 'next/image'
import LinkCard from '../components/card.list.item'
import sections from '../constants/sections'

export default function Home({data}) {
  return (
    <div className="p-5">
      <Head>
        <title>Rasio Atmaja - Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center text-base text-gray-500 dark:text-gray-300 font-medium">
        <Image src="/me.jpg" alt="Rasio Ganang Atmaja Photo Profile" width={100} height={100} className="rounded-full"/>
        <div className="text-2xl text-gray-700 dark:text-gray-50 font-extrabold">
          Rasio Ganang Atmaja
        </div>
        <div className="text-sm">
          Software Engineer, Researcher 🚀
        </div>
        <div className="text-sm">
          Surabaya, Indonesia 🇮🇩
        </div>
        <img src="/arrow.svg" alt="Arrow Down Icon" className="mx-auto my-5 animate-bounce" width="20" height="20"></img>
      </div>
      {
        sections.map((section, idx) => {
          let links = data[section.name]
          let linksCards = []
          links.map((link, i) => {
            linksCards.push(<LinkCard key={i}/>)
          })
          return (
            <div key={idx} className="px-3 grid grid-cols-1 gap-3 mb-10">
              <h3 className="text-center font-medium">{section.alias}</h3>
              { linksCards }
            </div>
          )
        })      
      }
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.rasatmaja.com/links`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}