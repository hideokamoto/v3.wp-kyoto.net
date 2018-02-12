import React from 'react'

// Router
import { Link } from 'react-router-dom'

// Semantic UI
import { Menu, Dropdown } from 'semantic-ui-react'

class GlobalNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = { activeItem: 'home' }
    this.handleItemClick = this.handleItemClick.bind(this)
  }
  handleItemClick (e, { name }) {
    this.setState({ activeItem: name })
  }
  render () {
    const { activeItem } = this.state
    return (
      <Menu pointing secondary>
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          active={activeItem === 'products' || activeItem === 'events'}
        >
          <Dropdown text="Work" fluid>
            <Dropdown.Menu>
              <Dropdown.Item name="products" onClick={this.handleItemClick}>
                <Link to="/products">作ったもの</Link>
              </Dropdown.Item>
              <Dropdown.Item name="events" onClick={this.handleItemClick}>
                <Link to="/events">イベント登壇・参加</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/about"
          name="about"
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/en"
          name="english"
          active={activeItem === 'english'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as="a"
          href="https://github.com/hideokamoto/"
          target="_blank"
          rel="noopener noreferrer"
          name="GitHub"
        />
      </Menu>
    )
  }
}

export default GlobalNav
