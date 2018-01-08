import React from 'react'

// Router
import { Link } from 'react-router-dom'

// Semantic UI
import { Divider, Container, Grid, Menu } from 'semantic-ui-react'

// Components

const AppFooter = props => {
  return (
    <div className="App-footer">
      <Divider />
      <Container>
        <Grid verticalAlign="middle" relaxed columns={3}>
          <Grid.Row stretched>
            <Grid.Column>
              <Menu text vertical>
                <Menu.Item as={Link} to="/" name="Home" />
                <Menu.Item as={Link} to="/about" name="about" />
                <Menu.Item as={Link} to="/en" name="english" />
                <Menu.Item
                  as={Link}
                  to="/privacy-policy"
                  name="Privacy policy"
                />
                <Menu.Item
                  as="a"
                  href="https://profiles.wordpress.org/hideokamoto"
                  target="_blank"
                  rel="noopener noreferrer"
                  name="WordPress.org"
                />
                <Menu.Item
                  as="a"
                  href="https://github.com/hideokamoto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  name="GitHub"
                />
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
}

export default AppFooter
