import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: #393b47;
  background: linear-gradient(
    0deg,
    rgba(14, 14, 14, 1) 0%,
    rgba(57, 58, 71, 1) 50%
  );
  border-top: 3px solid #c6c6c6;
`
export const FooterWrap = styled.div`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: gold;
    transition: 0.3s ease-out;
  }
`
export const FooterText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #fff;

  @media screen and (max-width: 768px) {
    text-align: center;
    line-height: 1.5;
  }

  @media screen and (max-width: 480px) {
    text-align: center;
    line-height: 1.5;
  }
`
export const FooterBtnWrapper = styled.div`
  margin: 16px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }

  @media screen and (max-width: 480px) {
    padding: 10px 0;
  }
`
export const FooterBtn = styled.div`
  display: flex;
  align-items: center;
`
export const FooterBtnLink = styled(Link)`
  background: gold;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`
