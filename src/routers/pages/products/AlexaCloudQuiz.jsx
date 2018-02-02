import React from 'react'
// semantic ui
import { Divider, Container, Header, Image } from 'semantic-ui-react'
// Containers
import Head from '../../../containers/Helmet'
import ContainerListWPCategoryPosts from '../../../containers/WpCategoryPosts'

const Page = ({ lang }) => (
  <div>
    <Head subTitle="Alexa Cloud Quiz Game" />
    <Container>
      <Header as="h2">Alexa Cloud Quiz Game</Header>
      <p>
        クラウドサービスについて勉強できる、簡単なクイズゲームです。<br />
        読み上げられた紹介文と一致するサービスの番号を答えてください。
      </p>
      <p>
        このデータはJAWS-UGで作成されたデータを利用しています。<br />
        <a
          href="https://github.com/jaws-ug/AWS-Karuta"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/jaws-ug/AWS-Karuta
        </a>
      </p>
      <Header as="h3">Download</Header>
      <p>
        <a
          href="https://alexa.amazon.co.jp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://alexa.amazon.co.jp/
        </a>から「クラウドクイズゲーム」を検索して、有効化してください。
      </p>
      <Image src="/img/products/alexa-cloud-quiz.png" />
    </Container>
    <Divider />
    <Container>
      <Header as="h3">Recent posts (release note or tips)</Header>
      <ContainerListWPCategoryPosts lang={lang} categoryId={155} perPage={5} />
    </Container>
  </div>
)
export default Page
