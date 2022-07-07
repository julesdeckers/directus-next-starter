import Head from 'next/head';
import DefaultLayout from "../layouts/default";
import 'modern-normalize';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Directus Next.js Example</title>
      </Head>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  )
}

export default MyApp
