
import styles from "../styles";
import { motion } from 'framer-motion'
import { fadeIn } from "../utils/motion";
import { arrow } from '../assets'

const InsightCard = ({title , imgUrl , subtitle , index}) => (

  // Setting Up Animation Box
  <motion.div 
  variants={fadeIn('up','spring', index * 0.5)}
  className=" flex flex-col md:flex-row gap-4">

    {/* Box 1 Picture Left */}

    <img src={imgUrl} alt="planet" className="flex h-[250px] w-[270px] object-cover rounded-[32px]" />
 

    {/* Box 2 Include Title and Arrow Circle */}

    <div className="flex  justify-between items-center ">
      <div className="flex flex-1 flex-col md:ml-[62px] max-w-[650px]">
        <h4 className="text-white font-normal lg:text-[42px] text-[26px]">{title}</h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">{subtitle}</p>
      </div>

      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] bg-transparent rounded-full border border-1 border-rose-400 ">
        <img src={arrow} alt="arrow"  className="w-[40%] h-[40px] object-contain"/>
      </div>

    </div>



  {/* <div className={`${styles.innerWidth} flex lg:flex-row flex-col gap-4 mx-auto `}>

    <div className="flex  items-center justify-center">
      <img src={imgUrl} alt="img" className=" h-[250px] md:w-[270px] rounded-[32px] object-cover" />
    </div>

      <div className="flex flex-col max-w-[600px] p-10">
        <h1 className="font-semibolt text-white lg:text-[42px] text-[20px]">{title}</h1>
        <div className="text-secondary-white mt-5">{subtitle}</div>
      </div>

      <div className="flex justify-center items-center"> 
        <div className={`${styles.flexCenter} bg-white w-[140px] h-[140px] rounded-full p-[2px] flex flex-col justify-center items-center`}>
          <div className={`${styles.flexCenter} flex-col bg-primary-black w-[100%] h-[100%] rounded-full flex items-end`}>
              <img src="/arrow.svg" alt="" className="flex justify-center items-center" />
          </div>
        </div>
    </div>
  </div> */}




  </motion.div>
);

export default InsightCard;



