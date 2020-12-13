import { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>We Design.</HeroH1>
        <HeroH1>We Develop.</HeroH1>
        <HeroH1>We Deliver.</HeroH1>
        {/* <HeroP>
          Find out about the products & services we make to help save lifes.
        </HeroP> */}
        <HeroBtnWrapper>
          <Button
            to="find"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Learn more {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
