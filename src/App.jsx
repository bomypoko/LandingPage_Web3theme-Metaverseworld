import React from 'react'
import styles from './styles'

import { Navbar , Footer  } from './components'
import { Hero , About, Explore , GetStarted , WhatsNew , World , Insights, Feedback ,  } from './sections'

const App = () => {
  return (
    <div className='overflow-hidden bg-primary-black  '>

      <Navbar/>
      <Hero />
      <div>

        <About className="relative"/>
        <div className='absolute gradient-03 z-0 '/>
        <Explore />
      </div>

      <div className='relative'>
        <GetStarted/>
        <div className='absolute gradient-04 z-0'/>
        <WhatsNew/>
      </div>

      <World/> 

      <div className='relative'>
        <Insights/>
        <div className='absolute gradient-04  '/>
        <Feedback/> 
      </div>
      
      <Footer/>

    
     
      
      
    </div>
  )
}

export default App