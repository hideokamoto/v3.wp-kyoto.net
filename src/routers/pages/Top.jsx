import React from 'react'
import PropTypes from 'prop-types'
import { Divider, Container, Header, Grid } from 'semantic-ui-react'

// Containers
import Head from '../../containers/Helmet'
import ContainerListWPPosts from '../../containers/WpListPosts'
import ContainerSearchWpPosts from '../../containers/WpPostSearch'
import ContainerListWPCategoryPosts from '../../containers/WpCategoryPosts'

// Static Component
import About from '../../components/Static/About'
// conf
import { getDefaultLanguage } from '../../settings/lang'

const FeaturePostList = props => (
  <Container>
    <Header as="h3">Categories</Header>
    <Grid columns={2} celled="internally">
      <Grid.Row>
        <Grid.Column>
          <Header as="h3" dividing>
            Amazon Alexa
          </Header>
          <ContainerListWPCategoryPosts lang={props.lang} categoryId={136} />
        </Grid.Column>
        <Grid.Column>
          <Header as="h3" dividing>
            AWS
          </Header>
          <ContainerListWPCategoryPosts lang={props.lang} categoryId={122} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header as="h3" dividing>
            WordPress
          </Header>
          <ContainerListWPCategoryPosts lang={props.lang} categoryId={4} />
        </Grid.Column>
        <Grid.Column>
          <Header as="h3" dividing>
            React
          </Header>
          <ContainerListWPCategoryPosts lang={props.lang} categoryId={68} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

const PageTop = props => (
  <div>
    <Head />
    <About />
    <Divider />
    <Container>
      <Header as="h3">Blog</Header>
    </Container>
    <ContainerSearchWpPosts lang={props.lang} />
    <ContainerListWPPosts lang={props.lang} />
    <Divider />
    <FeaturePostList lang={props.lang} />
  </div>
)
PageTop.propTypes = {
  lang: PropTypes.string
}
PageTop.defaultProps = {
  lang: getDefaultLanguage()
}

export default PageTop
