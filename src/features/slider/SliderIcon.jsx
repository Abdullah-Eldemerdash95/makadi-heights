function SliderIcon({slide, active, neededIndex, setSlideNumber}) {
    const {icon, heading, firstLine, secondLine} = slide;
    return (
        <li className={active} onClick={() => setSlideNumber(neededIndex)}>
        <span className="space-y-[16.5px]">
          <span> {icon}</span>
          <span className={(active === "active") ? "text-[#21436E]" : "text-[#268FB4]"}>{heading}</span>
        </span>
        <p className="">
        {firstLine}<br/>
        {secondLine}
        </p>
      </li>
    )
}

export default SliderIcon
