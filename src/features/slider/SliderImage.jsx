function SliderImage({slideImage, active}) {
    return (
      <li className={active}>
      <img src={slideImage} alt="img1"  className="max-w-[unset]"/>
    </li>
    )
}

export default SliderImage
