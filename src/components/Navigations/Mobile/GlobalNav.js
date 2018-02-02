import React from 'react'

// Router
import { Link } from 'react-router-dom'

// Semantic UI
import { Dropdown } from 'semantic-ui-react'

class GlobalNav extends React.Component {
  render () {
    return (
      <Dropdown text="Menu" fluid>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to="/">Home</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/products">Products</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/about">About</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/en">English</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="https://profiles.wordpress.org/hideokamoto"
              target="_blank"
              rel="noopener noreferrer"
            >
              WordPress.org
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="https://github.com/hideokamoto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Dropdown.Item>
          <Dropdown.Item>Login</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

export default GlobalNav
