import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    color: red;
  }
`

const theme = {}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
)

Theme.propTypes = {
  children: PropTypes.node,
}

export default Theme
