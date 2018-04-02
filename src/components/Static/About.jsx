import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import GoogleAds from 'react-google-ads'

const About = props => (
  <Container>
    <Header as="h3">About</Header>
    <p>
      WordPressを用いたwebサイト構築やAWSを利用したサービスの構築・運用などを行なっています。
    </p>
    <p>
      その他書籍の執筆やイベントでの登壇・ワークショップの開催などを国内外で実施しています。
    </p>
    <ul>
      <li>サービス開発: React / AWS / Serverless / Stripe</li>
      <li>WordPress制作: プラグイン / テーマ / AWSでのインフラ構築</li>
      <li>そのほか: Mautic / Alexa Skill</li>
    </ul>
    <GoogleAds
      client="ca-pub-6091198629319043"
      slot="2845873311"
      className="adsbygoogle"
      format="auto"
      style={{ display: 'block' }}
    />
  </Container>
)
export default About
