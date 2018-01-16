import React from 'react'

// component
import Header from './Header'
import Footer from './Footer'

const AppLayouts = props => {
  return (
    <div className="App">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default AppLayouts
