import React from 'react'
import { Button } from '../components/Button/Button'

export const NotFoundPage = () => {
  return (
    <div className="w-full h-full min-h-screen bg-black">
      <h2 className="text-red-500">404!</h2>
      <h4 className="text-gray-200">Page not found!</h4>
    </div>
  )
}
