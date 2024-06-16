import React, { Component } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import Dashboard from './pages/Dashboard'

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Dashboard />
      </>
    )
  }
}
