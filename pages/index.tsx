import type { NextPage } from 'next'
import Head from 'next/head'
import Index from '../views'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jordan Acker</title>
        <meta name="description" content="Jordan Acker React Developer" />
      </Head>

      <Index />
    </>
  )
}

export default Home
