import logo from "../../../public/LOGOWhite_EN 1.png";

function Loader({loader}) {
    return (
        <div className="preloader  flex justify-center items-center h-full w-full bg-[#268FB4] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <img src={logo} alt="" className={`ease transition-all duration-1000 ${loader === "1" ? "animate-[wiggle_1s_ease-in-out_infinite]" : "animate-[wiggle1_ease-in_1s]" }  `}/>
        </div>
    )
}

export default Loader
