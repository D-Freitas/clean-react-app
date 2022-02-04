import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HelloWorld from '@/presentation/pages/hello-world'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HelloWorld />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
