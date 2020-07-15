import React from 'react'
import PropTypes from 'prop-types'
import 'sanitize.css'
import Theme from 'Theme'

const App = ({ children }) => <Theme>{children}</Theme>

App.propTypes = {
  children: PropTypes.node,
}

export default App
