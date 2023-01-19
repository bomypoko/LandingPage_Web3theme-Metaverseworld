
import { motion } from 'framer-motion'
import styles from '../styles'
import { navVariants } from '../utils/motion'
import { search , menu } from '../assets'



const Navbar = () => (

  // Motion Moving from ABOVE COMPONENT  (Search Icon, Text , Menu bar with gradient light)
  <motion.nav variants={navVariants}
   initial="hidden"
   whileInView="show"
   className={`${styles.xPaddings} py-8 relative `}>

     {/* Part 1 - gradient light  */}
    <div className='absolute w-[50%] inset-0 gradient-01'/>
    {/* Part 2 - Icon , Word and Menu */}
    <div className={`${styles.innerWidth} flex mx-auto justify-between items-center`}>
      <img className='w-[24px] h-[24px] object-contain' src={search} alt="search" />
      <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>Metaverse</h2>
      <img className='w-[24px] h-[24px] object-contain' src={menu} alt="menu" />
    </div>
  </motion.nav>
);

export default Navbar;

