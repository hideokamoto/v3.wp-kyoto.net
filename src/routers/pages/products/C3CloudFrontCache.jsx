import React from 'react'
// semantic ui
import { Divider, Container, Header } from 'semantic-ui-react'
// Containers
import Head from '../../../containers/Helmet'
import ContainerListWPCategoryPosts from '../../../containers/WpCategoryPosts'

const Page = ({ lang }) => (
  <div>
    <Head subTitle="C3 CloudFront Cache Controller" />
    <Container>
      <Header as="h2">C3 CloudFront Cache Controller</Header>
      <p>
        AWSが提供するCDNサービス、CloudFrontのキャッシュを管理するプラグインです。
      </p>
      <p>
        WordPressで記事を公開・更新した際に、CloudFrontのキャッシュを削除するリクエストを送信します。
      </p>
      <Header as="h3">More information</Header>
      <iframe
        className="wp-embedded-content"
        sandbox="allow-scripts"
        security="restricted"
        src="https://wordpress.org/plugins/c3-cloudfront-clear-cache/embed/#?secret=qKzUjiPo0h"
        data-secret="qKzUjiPo0h"
        width="600"
        height="200"
        title="“C3 Cloudfront Cache Controller” — Plugin Directory"
        frameBorder="0"
        marginWidth="0"
        marginHeight="0"
        scrolling="no"
      />
    </Container>
    <Divider />
    <Container>
      <Header as="h3">Recent posts (release note or tips)</Header>
      <ContainerListWPCategoryPosts lang={lang} categoryId={152} perPage={5} />
    </Container>
  </div>
)
export default Page
