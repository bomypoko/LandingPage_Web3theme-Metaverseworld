
import { motion } from "framer-motion";
import styles from '../styles'
import { staggerContainer ,  fadeIn  } from "../utils/motion";
import { TypingText } from '../components'
import { arrowdown } from '../assets'


const About = () => (

    // Main Container
  <section className={`${styles.paddings} relative z-10  `}>

    {/* Gradient Light Stand alone */}
    <div className="absolute gradient-02 z-0"/>

    {/* Control Box of 1 and 2 */}
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:false, amount: 0.25}} className={`${styles.innerWidth} ${styles.flexCenter} mx-auto flex-col`}>
      <TypingText title="| About Metaversus " textStyles="text-center" />
    
    {/* inside 1 */}
     <motion.p variants={fadeIn('up','tween',0.2,1)} className="mt-[8px] font-normal text-center text-secondary-white">
        <span className="font-extrabold text-white">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the <span className="font-extrabold text-white"> madness of the metaverse
        </span> of today, using only <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's <span className="font-extrabold text-white">explore</span> the madness
        of the metaverse by scrolling down
     </motion.p>

     {/* inside 2  */}
     <motion.img
     variants={fadeIn('up','tweem',0.3,1)}
     src={arrowdown} alt="arrowdown"
     className=" w-[18px] h-[28px] mt-[28px] object-contain"
     />
    </motion.div>
  </section>
);

export default About;
