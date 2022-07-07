import Head from 'next/head'
import Image from 'next/image'
import { getDirectusClient } from '@lib/directus';
import { formatRelativeTime } from '@utils/format-relative-time';

export default function Home({ json }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <pre>{ json.data.our_process }</pre>
    </div>
  )
}


export async function getStaticProps({ params }) {
  const directus = await getDirectusClient();
  let about_us = await directus.items('about_us').readByQuery({
    limit: -1
  });

  return {
    props: { json: about_us }
  };
}