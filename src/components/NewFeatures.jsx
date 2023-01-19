import styles from "../styles";

// {imgUrl , title , subtitle , feature}
const NewFeatures = ({imgUrl , title , subtitle}) => (

   // flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]
  <div className=" flex flex-col sm:max-w-[250px] min-w-[210px]">
     <div className={`${styles.flexCenter} flex flex-col bg-[#323f5d] w-[70px] h-[70px] rounded-[24px] `}>
        <img className="w-1/2 h-1/2 object-contain" src={imgUrl} alt="imgurl" />
     </div>
     <h2 className="text-white text-[20px] leading-[30px] ">{title}</h2>
     <p className="text-[#B0B0B0] leading-[32px]">{subtitle}</p>

  </div>
);

export default NewFeatures;
