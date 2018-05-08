import React from 'react'
import CookieConsent from 'react-cookie-consent'

// component
import Header from './Header'
import Footer from './Footer'

const AppLayouts = props => {
  return (
    <div className="App">
      <Header />
      <main>{props.children}</main>
      <Footer />
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  )
}

export default AppLayouts
