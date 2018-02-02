import React from 'react'
// semantic ui
import {
  Grid,
  Divider,
  Container,
  Header,
  Item,
  Label,
  Button
} from 'semantic-ui-react'

// Router
import { Link } from 'react-router-dom'
// Containers
import Head from '../../../containers/Helmet'
import ContainerListWPCategoryPosts from '../../../containers/WpCategoryPosts'

const Top = ({ lang }) => (
  <div>
    <Head subTitle="作ったもの・サービスなど" />
    <Container>
      <Header as="h2">作ったもの・サービスなど</Header>
      <p>作ったものの紹介や、リリースノートなどをまとめています。</p>
      <p>
        まったく整理してなかったため、ページの用意が出来次第逐次更新予定です。
      </p>
    </Container>
    <Divider />
    <Container>
      <Header as="h2">プロダクト一覧</Header>
      <Grid columns={2} celled="internally">
        <Grid.Row>
          <Grid.Column>
            <Item.Group divided>
              <Item>
                <Item.Content>
                  <Item.Header as="a">
                    C3 CloudFront Cache Controller
                  </Item.Header>
                  <Item.Meta>
                    <span />
                  </Item.Meta>
                  <Item.Description>
                    Amazon
                    CloudFrontのキャッシュをWordPressから操作するためのプラグインです。
                  </Item.Description>
                  <Item.Extra>
                    <Button
                      primary
                      floated="right"
                      as={Link}
                      to="/products/c3-cloudfront-cache-controller"
                    >
                      Detail
                    </Button>
                    <Label icon="wordpress" content="WordPress Plugin" />
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
          <Grid.Column>
            <Item.Group divided>
              <Item>
                <Item.Content>
                  <Item.Header as="a">Alexa Cloud Quiz Game</Item.Header>
                  <Item.Meta>
                    <span />
                  </Item.Meta>
                  <Item.Description>
                    クラウドサービス（主にAWS）について、クイズ・カルタ形式で遊びながら勉強できるスキルです。
                  </Item.Description>
                  <Item.Extra>
                    <Button
                      primary
                      floated="right"
                      as={Link}
                      to="/products/alexa-cloud-quiz"
                    >
                      Detail
                    </Button>
                    <Label icon="amazon" content="Amazon Alexa" />
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <Divider />
    <Container>
      <Header as="h2">Recent posts (release note or tips)</Header>
      <ContainerListWPCategoryPosts lang={lang} categoryId={150} perPage={5} />
    </Container>
  </div>
)

export default Top
