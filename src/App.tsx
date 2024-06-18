import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import Layout from './components/Layout'
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import Ocorrencias from './pages/Ocorrencias'
import Routes from './routes'

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    )
  }
}
