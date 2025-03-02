import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>fsezer.dev</title>
        <meta name="description" content="Yazılım çözümleri, web geliştirme ve freelance hizmetleri sunan bir yazılım geliştiricisinin kişisel portfolyo sitesi." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp 