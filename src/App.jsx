import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Chapter from './pages/Chapter'
import Video from './pages/Video'
import View from './pages/View'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='bg-red-50'>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/chapter/:id' element={<Chapter/>} />
      <Route path='/module/:id' element={<Video/>} />
      <Route path='/view/:id' element={<View/>} />
    </Routes>
  </div>
  )
}

export default App
