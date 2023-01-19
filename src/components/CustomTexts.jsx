import {motion} from 'framer-motion'
import { textContainer , textVariant2 } from '../utils/motion';
import styles from '../styles'


export const TypingText = ({title , textStyles}) => (

  <motion.p 
  variants={textContainer}
  className={` ${textStyles} font-normal text-[14px] text-secondary-white  `}>

 {/* Finding a Letter to keep no space   */}
  {Array.from(title).map((letter , index) => (
    <motion.span variants={textVariant2} key={index}>
      {letter === ' ' ? ' ' : letter}
    </motion.span>
  ))}
  </motion.p>
);
// {title , textStyles}
export const TitleText = ({title , textStyles}) => (
  <motion.h2
  variants={textVariant2}
  initial="hidden"
  whileInView="show"
  className={`mt-8 font-bold md:text-[64px]  text-[40px] text-white ${textStyles} `}
  
  >
    
   {title}

  </motion.h2>
);
