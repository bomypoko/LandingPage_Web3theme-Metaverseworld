
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText , TitleText, InsightCard ,  } from "../components";
import {  insights } from "../constants";
import { motion } from "framer-motion";

const Insights = () => (


  <section className={`${styles.paddings} relative z-10`}>

    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once: false , amount: 0.25}}
    
    className={`${styles.innerWidth} mx-auto`}>

        <TypingText title="| Insight" textStyles="text-center"  />
        <TitleText title="Insight about metaverse" textStyles="text-center"/>

        <div className={`flex flex-col w-full flex-wrap mx-auto mt-10 gap-[30px]`}>
            {insights.map((insights , index ) => (
              
              <InsightCard 
              key={insights.title}
              index={ index + 1}
              {...insights}
              
              />

            ))}
        </div>
    </motion.div>


  </section>
);

export default Insights;


{/* <div className="mt-[50px] flex flex-col gap-[30px]">
{insights.map((insight,index) => (
  <InsightCard 
  key={insight-${index}} {...insight}
  index={index + 1 }/>
))}
  
</div> */}
