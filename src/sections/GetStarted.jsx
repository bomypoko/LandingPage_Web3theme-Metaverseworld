
import { motion } from 'framer-motion'
import { staggerContainer , fadeIn , planetVariants } from '../utils/motion';
import { StartSteps, TitleText , TypingText } from '../components';
import styles from '../styles';
import { startingFeatures } from '../constants';

import { getstartstar } from '../assets'
// import leftstar from '../assets/get-started.png'


const GetStarted = () => (

    // outline box (red)
  <section className={`relative z-10 ${styles.paddings}`}>

    {/* Control Box (white) */}
    <motion.div
     variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once: false, amount: 0.25}}
     className={`${styles.innerWidth}  mx-auto  flex lg:flex-row flex-col gap-8`}>

      {/* left box (blue) */}
      <motion.div variants={planetVariants('left')} className={`${styles.flexCenter} flex-1`}>
        <img src={getstartstar} alt="getstarted" className='w-[90%] h-[90%] object-contain' />
      </motion.div>

      {/* End box left */}

      
      {/* Right box (green) */}
      <motion.div variants={fadeIn('right' , 'tween' , 0.2, 2)} className=" flex-[0.75] flex justify-center flex-col">
      {/* Heading */}
        
          <TypingText title="| How Metaversus Works"/>
          <TitleText title={<>Get Started with a few click</>}/>
        
      {/* End Box Right */}

      {/* Star Step */}
        <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
          {startingFeatures.map((feature , index) => (
            <StartSteps
            key={feature}
            number={index + 1 }
            text={feature}
            />
          ))}
        </div>
      </motion.div>
      {/* ------------------------------------------ */}


    </motion.div>
  </section>
);

export default GetStarted;
