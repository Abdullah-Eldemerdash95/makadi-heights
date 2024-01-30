import { useEffect,useState } from "react";
import backgroundFirstSection from "/Makadi_Heights_Render 1.png";
import sectionOneImage from "/sectionOneImage.png";
import Icon1 from "./icons/Icon1";
import Icon2 from "./icons/Icon2";
import Icon3 from "./icons/Icon3";
import Icon4 from "./icons/Icon4";
import Icon5 from "./icons/Icon5";
import Icon6 from "./icons/Icon6";
import sliderImage1 from "/sliderImage1.png";
import sliderImage2 from "/sliderImage2.jpg";
import sliderImage3 from "/sliderImage3.jpg";
import sliderImage4 from "/sliderImage4.jpg";
import sliderImage5 from "/sliderImage5.jpg";
import sliderImage6 from "/sliderImage6.jpg";
import formImage from "/formImage.png";
import Slider from "./features/slider/Slider";
import FormData from "./features/form/FormDataCenter";
import HeaderMain from "./features/header/HeaderMain";
import Loader from "./features/loader/Loader";
import {  useInView } from 'react-intersection-observer';


const storage = [
  {icon: <Icon1/>,sliderImage: sliderImage1,heading: "Commercial Areas", firstLine: "Downtown", secondLine: "Makadi Heights Mall"},
  {icon: <Icon2/>,sliderImage: sliderImage2,heading: "Sports Facilities", firstLine: "Sports Courts, Fitness Center", secondLine: "Water Sports Activities"},
  {icon: <Icon3/>,sliderImage: sliderImage3,heading: "Kids Friendly Areas", firstLine: "Kids Aqua Park", secondLine: "Kids Areas"},
  {icon: <Icon4/>,sliderImage: sliderImage4,heading: "Central Park", firstLine: "Far far away, ", secondLine: "behind the word mountains"},
  {icon: <Icon5/>,sliderImage: sliderImage5,heading: "Hotels", firstLine: "Far far away, ", secondLine: "behind the word mountains"},
  {icon: <Icon6/>,sliderImage: sliderImage6,heading: "Medical Facilities", firstLine: "Far far away, ", secondLine: "behind the word mountains"},
]


function App() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [loader,setLoader] = useState(true);
  const [ ref, inView ] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  const [ ref2, inView2 ] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  const [ ref3, inView3 ] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

    // loader animations 
  useEffect(() => {
    const interval1 = setTimeout(() =>  setLoader("1"), 2000);
    const interval2 = setTimeout(() =>  setLoader(false), 7000);
    return () => clearInterval(interval1,interval2);
  }, []);
  return (    
    <>
      {(loader !== false) ? <Loader loader={loader}/> : 
      <main className="relative">
      <HeaderMain status={loader}/>
      <section className="section1 h-[1330px]">
        <div className="w-[100.3472vw] h-[919.48px] absolute top-[-93px] left-[-0.4861vw] ">
          <img src={backgroundFirstSection} alt="Project" className="max-w-[unset] "/>
        </div>
        <div className="h-[628px]  pl-[135px] bg-[#21436E] top-[702px] absolute w-full">
          <div ref={ref} className="flex flex-row gap-[3.8194vw]  w-[82.6389vw] text-white " >
            <img  src={sectionOneImage} alt="clients" className={`${inView ? "transition-all animate-[fadeLeft_ease-in-out_3s]" : " "}`} />
            <div className={`${inView ? "transition-all animate-[fadeRight_ease-in-out_3s]" : " "}`}>
              <h2 className="text-[80px] leading-[87.9px] font-[400] font-['Diodrum-Arabic'] ">The place<br/> <span className="font-[900] font-[Diodrum-Arabic] text-[80px] leading-[88px]">we call home</span> </h2>
              <p className="text-[22px] leading-[36px] mt-[22px] font-[600] font-['Sharp_Sans_No1_Medium']">Makadi Heights is a town built over 3.4 million square meters planned for development, with an elevation reaching 78 meters above sea level guaranteeing magnificent panoramic sea views residential units. 
                Envisioned as a comprehensive town.</p>
              <div className=" flex flex-row gap-[1.4583vw] mt-[49.41px]">
                <button className="w-[15.3472vw] typeABtn">Download Brochure</button>
                <button className="w-[15.3472vw] typeABtn">Show Master plan</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={ref2} className="section2 p-[120px_135px_223px_131px] ">
          <div className={`${inView2 ? "transition-all animate-[fadeLeft_ease-in-out_3s]" : " "} max-w-[32.63889vw] text-[#21436E]`}>
            <h3 className="captialize text-[50px] leading-[38px] h-[50px]">Discover Lifestyle</h3>
            <h2 className="captialize text-[104px] leading-[48px] h-[88px] tracking-[-5.6px]">Amentities</h2>
            <p className="text-[18px] leading-[29px] mb-[52.73px] mt-[16px]"> Occupying a land area of 33,000 square meters,<br/> Makadi Heights’ stunning clubhouse </p>
          </div>
        <div>
        <Slider slideData={storage} slideNumber={slideNumber} setSlideNumber={setSlideNumber} />
        </div>
      </section>
      <section className="relative section3 flex h-[781px]">
        <div ref={ref3} className=" w-[45.02361vw] z-20 absolute left-[-6.59722vw]">
          <img src={formImage} alt="kid" className={`h-[781px] w-[45.02361vw]  ${inView3 ? "transition-all animate-[fadeLeft_ease-in-out_3s]" : " "}`}/>
          <p className={`absolute bottom-[304.9px] rotate-[270deg] right-[-144px] flex flex-col gap-[1px] text-[#21436E] 
            ${inView3 ? "transition-all  animate-[fadeIn_ease-in-out_4s]" : " "}
          `}>
          <span className="text-[30px] font-[600] leading-[39px] font-['Sharp_Sans_No1_Medium'] italic h-[39px] whitespace-nowrap">Ready for a Home at </span>
          <span className="text-[80px] font-[400] leading-[87.9px] font-['Diodrum-Arabic'] h-[88px] whitespace-nowrap">Makadi Heights</span>
          </p>
        </div>
        <div className={`bg-[#EDEDED80]  block w-full p-[78px_152px_68px_620px] ${inView3 ? "transition-all delay-[5000ms] animate-[fadeRight_ease-in-out_4s]" : " "} `}>
          <FormData/>
        </div>
      </section>
      <footer></footer>
    </main>}
      
    </>

  );
}

export default App;
