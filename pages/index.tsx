import type { NextPage } from 'next'
import Head from 'next/head'
import Index from '../views'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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

export async function getStaticProps({ locale }: { locale: any}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'hero',
        'past-works',
        'cta',
        'skills',
        'about',
        'contact',
      ])),
    },
  }
}