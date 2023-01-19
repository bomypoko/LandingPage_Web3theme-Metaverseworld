

import styles from "../styles";
import { NewFeatures, TitleText, TypingText ,} from "../components";
import { newFeatures } from "../constants";
import { motion } from 'framer-motion'
import { staggerContainer , planetVariants , fadeIn } from "../utils/motion";
import { whatsnews , vrpano } from '../assets'

const WhatsNew = () => (


  <section className={`${styles.xPaddings}`}>
    

    <motion.div className={`${styles.innerWidth} flex flex-col lg:flex-row-reverse mx-auto `}
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false , amount: 0.25}}
    >

        <motion.div className="flex flex-1 mx-auto justify-center items-center"
        variants={planetVariants('right')}>
          <img className="w-[90%] h-[90%] object-contain" src={whatsnews} alt="whatnews" />
        </motion.div>

        <div className="flex flex-col flex-[0.85] justify-center ">
          <TypingText title="| What New"/>
          <TitleText title="What's New about Metaversus?"/>

          <motion.div
          variants={fadeIn('right','tween',0.2,1)} 
          
          className="flex flex-wrap mt-[24px] gap-[24px]">
            {newFeatures.map(item => (
              <NewFeatures
              key={item.title}
              {...item}
              />
            ))}
          </motion.div>

        </div>

     
    </motion.div>

  </section>
);

export default WhatsNew;
