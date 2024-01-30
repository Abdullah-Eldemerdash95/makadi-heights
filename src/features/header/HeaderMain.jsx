import { useEffect, useState } from "react";
import companyLogo from "/LOGOWhite_EN 1.png";
import weatherImage from "/Weather.svg";
import phoneCall from "/phoneCall.png";

function HeaderMain() {
    const [mainData, setMainData] = useState(null);
    const [showCelsius, setShowCelsius] = useState(true);
    const temperature = (mainData?.main.temp)
    const tempCelsius = (mainData?.main.temp - 273.15);
    const weatherDescription = (mainData === null ) ? "still getting data" : ((mainData?.weather).map(x=> x.description)).toString()
  
    useEffect(() => {      
        const fetchData = async () => {
          const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=f1130b3524feefd0549671bf69edc578');
          if (!response.ok) throw Error("Failed getting weather");
          const data = await response.json();
          setMainData(data);}
        fetchData();
    }, []);
    return (
        <header className="flex flex-row  left-[8.8194vw] right-[5.4861vw] top-[65px] justify-between absolute z-10 text-white "> 
        {/* we start from top length = 65px then we add each on top space*/}
          <div>
            <img src={companyLogo} alt="Makadi Heights" className="pt-[5px] transition-all animate-[fadeLeft_ease-in-out_3s]" />
          </div>
          <div>
            <div className="flex flex-row items-center delay-100 transition-all animate-[fadeRight_ease-in-out_5s]">
              <ul className="list-none flex flex-row gap-[15px] items-center p-[1.64px] ">
                <li className="group">
                  <img src={weatherImage} alt="weather mode" />
                  <span className="absolute top-[60px] scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">{ weatherDescription}</span>
                </li>
                <li onClick={()=> setShowCelsius(!showCelsius)} className="cursor-pointer"> 
                  {showCelsius ? `${(mainData === null ) ? "--" :`${Math.round(tempCelsius)}°C`}` : `${Math.round(temperature)}K`}
                </li>
              </ul>
              <a href="tel:+201004378432" className="ml-[15px] pt-[5px]">
                <img src={phoneCall} alt="call us" />
              </a>
              <button className="ml-[34px] w-[144px] pt-[5px] typeABtn">
                Book Now
              </button>
              <button className="h-[24px] w-[116px] flex flex-row ml-[40px]">
                <span className="font-['Diodrum-Arabic'] font-[400] text-[18px] leading-[20px]">Menu</span>
                <ul className="h-[24px] w-[44px] ml-[20px] flex flex-col justify-between">
                <li className="h-[1.5px] w-[44px] ml-[20px] bg-white"></li>
                <li className="h-[1.5px] w-[44px] ml-[20px]  bg-white"></li>
                <li className="h-[1.5px] w-[44px] ml-[20px]  bg-white"></li>
                </ul>
              </button>
            </div>
          </div>
        </header>
    )
}

export default HeaderMain
