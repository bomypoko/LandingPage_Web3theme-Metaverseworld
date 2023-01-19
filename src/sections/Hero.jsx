import { motion } from 'framer-motion'
import styles from '../styles'
import { slideIn , staggerContainer , textVariant } from '../utils/motion';
import { cover , stamp } from '../assets'


const Hero = () => (

  

  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>

      {/* Create a container to control all componenet inside (Animate 1 and 2)  */}
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25}} className={`${styles.innerWidth} mx-auto flex flex-col`}>

        {/* Start Animation 1 */}
      <div className='flex justify-center items-center flex-col relative z-10'> 
        <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} `}>
            Metaverse
        </motion.h1>
        <motion.div variants={textVariant(1.2)} className={`${styles.heroHeading} flex flex-row items-center`}>
          <h1>Ma</h1>
          <div className={`${styles.heroDText}`} />
          <h1 >ness</h1>
        </motion.div>
      </div>
      {/* End Animation 1 */}

      

      {/* Start Animation 2 */}
      <motion.div variants={slideIn('right', 'tween' ,0.2, 1)} className=" relative w-full md:-mt-[20px] -mt-[12px]">
          <div className= 'absolute hero-gradient w-full h-[300px] rounded-tl-[140px] z-0 -top-[30px]'/>
          <img className='relative w-full sm:h-[500px] h-[300px] rounded-tl-[140px] object-cover' src={cover} alt="cover" />
          <a href="#explore">
              <div className=' relative z-10 w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px]  '>
                <img className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain ' src={stamp} alt="stamp" />
              </div>
           </a>
      </motion.div>
      {/* End Animation 2 */}

    </motion.div>
  </section>
);

export default Hero;


