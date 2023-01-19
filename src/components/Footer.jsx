import styles from "../styles";
import { motion } from "framer-motion";
import { socials } from "../constants";
import { footerVariants } from "../utils/motion";
import { headset1 } from "../assets";


const Footer = () => (


  // Main Box - control all entire box ( onetime show, no once:false and mount property )
  <motion.footer variants={footerVariants} initial="hidden" whileInView="show" className={`${styles.paddings} relative `}>

    {/* div 1 only gradient color */}
    <div className="footer-gradient"/>
    
    {/* Control side box */}
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>

    {/* Main Div (seting wrapping box ) */}
      <div className="flex items-center justify-between flex-wrap gap-5">

    {/* Element 1 (Text box ) */}
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">Enter the Metaverse</h4>

    {/* Element 2 (Btn box ) */}
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
          <img src={headset1} alt="headset" className="w-[24px] h-[24px] object-contain" />
          <p className="text-white uppercase"> Enter the Metaverse</p>
        </button>
      </div>

    {/* Element 3 */}
    <div className="flex flex-col">

      {/* Line */}
      <div className="mb-[50px] h-[2px] bg-white opacity-10"/>

      <div className="flex justify-between items-center  ">
        <h4 className="font-extrabold text-white">Metaverses</h4>
        <p className="flex items-center justify-center text-center text-secondary-white ">Copyright 2022-2023 Metaversus</p>

        <div className="flex flex-col sm:flex-row items-center justify-end  ">
          {socials.map(item => (
            <img
             key={item.name}
             src={item.url}
             alt="social icon"
             className="px-2 py-2" />
          ))}
        </div>
         
      </div>
    
    </div>

    
    </div>



  </motion.footer>
);

export default Footer;
