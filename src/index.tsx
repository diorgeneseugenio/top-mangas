import { StrictMode } from 'react'
import { render } from 'react-dom'
import 'tailwindcss/tailwind.css'
import { IndexPage } from './presentation/pages'

render(
  <StrictMode>
    <IndexPage />
  </StrictMode>,
  document.getElementById('root')
)
