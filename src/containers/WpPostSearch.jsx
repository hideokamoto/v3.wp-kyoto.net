import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, Form, Icon, Input } from 'semantic-ui-react'

// Action
import { listWpPosts } from '../redux/actions/creators/wp/posts'
// conf
import { getDefaultLanguage } from '../settings/lang'

class ContainerSearchWpPosts extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (event) {
    event.preventDefault()
    const { search } = this.state
    const { dispatch, lang } = this.props
    dispatch(listWpPosts(lang, search))
  }
  handleChange (e, { name, value }) {
    this.setState({ [name]: value })
  }
  render () {
    const { search } = this.state
    return (
      <Container>
        <div style={{ paddingBottom: '15px', marginBottom: '15px' }}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <Input
                fluid
                icon={
                  <Icon
                    name="search"
                    inverted
                    circular
                    link
                    onClick={this.handleSubmit}
                  />
                }
                placeholder="Search..."
                value={search}
                name="search"
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form>
        </div>
      </Container>
    )
  }
}

ContainerSearchWpPosts.propTypes = {
  lang: PropTypes.string,
  dispatch: PropTypes.func.isRequired
}
ContainerSearchWpPosts.defaultProps = {
  lang: getDefaultLanguage()
}

export default connect()(ContainerSearchWpPosts)
