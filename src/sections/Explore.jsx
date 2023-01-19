
import { useState } from 'react'
import { motion } from "framer-motion";
import { TypingText  , ExploreCard , TitleText } from "../components";
import styles from '../styles'
import {  staggerContainer } from "../utils/motion";
import { exploreWorlds } from '../constants'
import React from 'react'
// import { planet1 , planet2 , planet3, planet4 , planet5 } from '../assets';


const Explore = () => {
  const [active , setActive] = useState('world-2');

  return (
    
      // Main Container 
    <section className={`${styles.paddings}`} id="explore">
  
    {/* Box 1 - Main box control Motion div */}
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:false, amount:0.25 , }}className={`${styles.innerWidth} mx-auto flex flex-col` }>
  
      {/* send and received prop  */}
      <TypingText title="| The World" textStyles="text-center"/>
      <TitleText  title={<> Choose the World you want <br className='md:block hidden'/> to explore </>} textStyles="text-center" />
  
      <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5' >

        {exploreWorlds.map((world , index) => (
          <ExploreCard 
          key={world.id}  
          {...world} 
          index={index} 
          active={active} 
          handleClick={setActive}
          
          />
        ))} 
        
      </div> 
    </motion.div>
  </section>
  )
}

export default Explore