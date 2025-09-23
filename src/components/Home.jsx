import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

function Home() {
  return (
    <div className='w-screen h-screen'>
        <Navbar></Navbar>
      <Content></Content>
    </div>
  )
}

export default Home