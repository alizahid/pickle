import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Markdown from 'react-markdown'

import { Footer } from '@pickle/components/common/footer'
import { Header } from '@pickle/components/common/header'
import { getPage } from '@pickle/lib/graphcms'
import { Page } from '@pickle/types/graphcms'

type Props = {
  page: Page
}

const Terms: NextPage<Props> = ({ page }) => (
  <>
    <Head>
      <title>{page.title}: Pickle</title>
    </Head>

    <Header />

    <main>
      <h1 className="text-6xl font-bold">{page.title}</h1>

      <Markdown className="mt-8 text-xl">{page.content}</Markdown>
    </main>

    <Footer />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const page = await getPage('terms')

  if (!page) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      page
    }
  }
}

export default Terms
