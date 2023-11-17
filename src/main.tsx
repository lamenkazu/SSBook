import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import {GlobalStyles} from './styles/global'

import {ApolloProvider} from '@apollo/client'

import { Routes } from './routes'
import { client } from './lib/apollo.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
      <ApolloProvider client={client}>

        <Routes/>

      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
