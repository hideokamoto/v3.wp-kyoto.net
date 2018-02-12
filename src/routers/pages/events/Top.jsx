// @flow
import React from 'react'
// semantic ui
import { Container, Header } from 'semantic-ui-react'

// Containers
import Head from '../../../containers/Helmet'
import ContainerListWPCategoryPosts from '../../../containers/WpCategoryPosts'

const Top = ({ lang }: { lang: string }) => (
  <div>
    <Head subTitle="イベント開催・参加レポート" />
    <Container>
      <Header as="h2" className="mainSection-title">
        イベント開催・参加レポート
      </Header>
      <p>イベントに参加・登壇した場合のレポートをここにまとめています。</p>
      <Header as="h3" dividing>
        直近の登壇レポート
      </Header>
      <ContainerListWPCategoryPosts lang={lang} categoryId={42} perPage={5} />
    </Container>
  </div>
)

export default Top
