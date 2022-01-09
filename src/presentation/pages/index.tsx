import React from 'react'
import { Button } from '../components/Button/Button'

export const IndexPage = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="disabled">Disabled</Button>
    </div>
  )
}
