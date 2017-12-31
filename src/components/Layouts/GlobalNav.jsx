import React from 'react';

// Router
import {
  Link,
} from 'react-router-dom';

// Semantic UI
import {
  Menu,
} from 'semantic-ui-react';

class GlobalNav extends React.Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <Menu pointing secondary>
        <Menu.Item as={Link} to="/" name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
        <Menu.Item as={Link} to="/about" name='about' active={activeItem === 'about'} onClick={this.handleItemClick}/>
        <Menu.Item as={Link} to="/en" name='english' active={activeItem === 'english'} onClick={this.handleItemClick}/>
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
        <Menu.Menu position='right'>
          <Menu.Item name='login'/>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default GlobalNav;