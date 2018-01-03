import React from 'react'
export const prerenderReady = () => {
  window.prerenderReady = true
}

export function prerenderStaticPage (PageComponent) {
  return class HOC extends React.Component {
    componentWillMount () {
      prerenderReady()
    }
    render () {
      return <PageComponent {...this.props} />
    }
  }
}
