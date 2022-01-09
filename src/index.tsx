import { StrictMode } from 'react'

import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import 'tailwindcss/tailwind.css'
import { Routes } from './services/routes'

render(
  <StrictMode>
    <Router>
      <Routes />
    </Router>
  </StrictMode>,
  document.getElementById('root')
)
