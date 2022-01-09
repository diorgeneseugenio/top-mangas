import { StrictMode } from 'react'

import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import 'tailwindcss/tailwind.css'
import { Providers } from './services/providers'
import { Routes } from './services/routes'

render(
  <StrictMode>
    <Providers>
      <Router>
        <Routes />
      </Router>
    </Providers>
  </StrictMode>,
  document.getElementById('root')
)
