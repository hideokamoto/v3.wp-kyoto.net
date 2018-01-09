import React from 'react'

// Router
import { Link } from 'react-router-dom'

// Semantic UI
import { Divider, Header, Container, Grid } from 'semantic-ui-react'

// Components
import GlobalNav from './GlobalNav'

const AppHeader = props => {
  return (
    <div className="App-header">
      <Container>
        <Grid verticalAlign="middle" relaxed columns={2}>
          <Grid.Row stretched>
            <Grid.Column>
              <Header as="h1">
                <Header.Content>
                  <Link to="/">WP-Kyoto</Link>
                </Header.Content>
                <Header.Subheader>
                  京都〜大阪あたりのWebディベロッパー、主にWordPressやReactとAWSを扱ってます。
                </Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <GlobalNav />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Divider />
    </div>
  )
}

export default AppHeader
