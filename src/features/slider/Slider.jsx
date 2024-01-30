import SliderBullet from "./SliderBullet";
import SliderIcon from "./SliderIcon";
import SliderImage from "./SliderImage";
import {  useInView } from 'react-intersection-observer';

function Slider({slideData,slideNumber, setSlideNumber}) {
  const [ ref4, inView4 ] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  const [ ref5, inView5 ] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
    return (
          <div ref={ref4} className="flex flex-row gap-x-[3.75vw]"> 
            <ul className={`iconsNames relative w-[38.81944vw] grid grid-cols-[16.80556vw_16.80556vw] grid-rows-[158.74px] gap-y-[36.34px] gap-x-[4.02778vw]
             after:content-[url('/LineULMain.svg')] after:bottom-[0px] after:left-[18.81944vw] after:absolute
             ${inView4 ? "transition-all animate-[fadeLeft_ease-in-out_3s]" : " "}`}>
            {slideData.map((slide, index) => (
                <SliderIcon slide={slide}  key={index} active={(index === slideNumber) ? "active" : "notSelected"} neededIndex={index}   setSlideNumber={setSlideNumber}/>
            ))}
            </ul>
            <div  ref={ref5} className={`relative flex flex-col gap-[32px] ${inView5 ? "transition-all animate-[wiggle2_ease-in-out_3s]" : " "}`}>
              <ul className="imagesSlider absolute top-[-209px] h-[688px] w-[39.4444vw]">
                {slideData.map((slide, index) => (
                    <SliderImage slideImage={slide.sliderImage} active={(index === slideNumber) ? "active" : "hidden"} key={index} />
                ))}
              </ul>
              <ul className="pointsPagination flex justify-center gap-[19px] absolute bottom-0 left-[13.40278vw]">
                {slideData.map((slide, index) => (
                        <SliderBullet key={index} active={(index === slideNumber) ? "active" : "notSelected"}  neededIndex={index} setSlideNumber={setSlideNumber}/>
                ))}
              </ul>
            </div>
          </div>
    )
}

export default Slider;
