import React from 'react'

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full min-h-screen bg-black">
      <h2 className="text-6xl text-red-500">404</h2>
      <h4 className="text-lg text-gray-200">Page not found!</h4>
    </div>
  )
}
