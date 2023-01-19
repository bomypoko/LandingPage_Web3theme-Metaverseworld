import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn  } from "../utils/motion";
import { planet9 } from '../assets'

const Feedback = () => (

  <section className={`${styles.paddings}`}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false , amount: 0.2}}
    className={`${styles.innerWidth} flex flex-col lg:flex-row gap-8 mx-auto`}>

      <motion.div 
      variants={fadeIn('right','tween',0.2,1)}
      // flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative
      className=" relative flex-[0.5] flex flex-col  justify-end lg:max-w-[370px]  border-[1px] border-[#6a6a6a] rounded-[32px] p-4 sm:p-8 ">
        <div className="feedback-gradient"/>

        <div> 
          <h1 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">Ratchasri Kidking </h1>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white"> Founder | Metaverse</p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
      </motion.div>

      <motion.div
      variants={fadeIn('left','tween',0.2,1)}
      className="flex flex-1">
        <img src={planet9} alt="planet" className="object-cover rounded-[32px]" />
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;


