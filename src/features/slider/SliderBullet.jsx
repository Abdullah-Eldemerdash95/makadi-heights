function SliderBullet({active, neededIndex, setSlideNumber}) {
    return (
      <li className={active} onClick={() => setSlideNumber(neededIndex)}></li>
    )
}

export default SliderBullet
