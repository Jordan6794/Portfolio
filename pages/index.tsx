import type { NextPage } from 'next'
import Head from 'next/head'
import Index from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jordan Acker</title>
        <meta name="description" content="Jordan Acker React Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Index />
    </>
  )
}

export default Home
