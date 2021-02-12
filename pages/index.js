import Head from 'next/head';
import Image from 'next/image';
import useSWR from 'swr';
import LinkCard from '../components/card.list.item';
import sections from '../constants/sections';
import fetcher from '../libs/fetcher';
import PropTypes from 'prop-types';

export default function Home({ initialData }) {
    const { data } = useSWR(URL, fetcher, { initialData });

    return (
        <div className="p-5">
            <Head>
                <title>Rasio Atmaja - Links</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="Description"
                    content="All about Rasio Atmaja social media links and highlight links"></meta>
                <meta
                    name="Keywords"
                    content="Rasio Atmaja, Rasio Ganang Atmaja, Social Media, Links"></meta>

                <meta property="og:url" content="https://links.rasio.dev" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Rasio Atmaja - Links" />
                <meta
                    property="og:description"
                    content="All about Rasio Atmaja social media links and highlight links"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="links.rasio.dev" />
                <meta property="twitter:url" content="https://links.rasio.dev" />
                <meta name="twitter:title" content="Rasio Atmaja - Links" />
                <met
                    name="twitter:description"
                    content="All about Rasio Atmaja social media links and highlight links"
                />
                <meta name="twitter:site" content="@rasatmaja" />
                <meta name="twitter:creator" content="@rasatmaja" />
            </Head>
            <div className="text-center text-base text-gray-500 dark:text-gray-300 font-medium">
                <Image
                    src="/me.jpg"
                    alt="Rasio Ganang Atmaja Photo Profile"
                    priority={true}
                    width={100}
                    height={100}
                    className="rounded-full"
                />
                <div className="text-2xl text-gray-700 dark:text-gray-50 font-extrabold">
                    Rasio Ganang Atmaja
                </div>
                <div className="text-sm">
                    Software Engineer, Researcher{' '}
                    <span role="img" aria-label="Rocket">
                        🚀
                    </span>
                </div>
                <div className="text-sm">
                    Surabaya, Indonesia{' '}
                    <span role="img" aria-label="Indonesia">
                        🇮🇩
                    </span>
                </div>
                <img
                    src="/arrow.svg"
                    alt="Arrow Down Icon"
                    className="mx-auto my-5 animate-bounce"
                    width="16"
                    height="16"></img>
            </div>
            {data
                ? sections.map((section, idx) => {
                      let links = data[section.name];
                      let linksCards = [];
                      links.map((link, i) => {
                          linksCards.push(<LinkCard data={link} key={i} />);
                      });
                      return (
                          <div key={idx} className="px-3 grid grid-cols-1 gap-3 mb-10">
                              <h3 className="text-center font-medium">{section.alias}</h3>
                              {linksCards}
                          </div>
                      );
                  })
                : 'Loading data ...'}
        </div>
    );
}

Home.propTypes = {
    initialData: PropTypes.object.isRequired
};

const BASE_URL = process.env.API_BASE_URL || 'https://api.rasatmaja.com/';
const URL = BASE_URL + 'links';
export async function getStaticProps() {
    // create promise to API URL
    const data = await fetcher(URL);

    // Pass data to the page via props
    return { props: { initialData: data } };
}
