import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`
export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: left;
`
export const HeroH1 = styled.h1`
  margin-left: -340px;
  color: #fff;
  font-size: 80px;
  text-align: left;
  line-height: 1.5;

  &:last-of-type {
    width: 450px;
    padding-bottom: 30px;
    border-bottom: 4px solid gold;

    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media screen and (max-width: 480px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
    margin: auto;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    margin: auto;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  margin-left: -340px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding-top: 30px;
    margin: 0 auto;
  }

  @media screen and (max-width: 480px) {
    padding-top: 30px;
    margin: 0 auto;
  }
`
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`
