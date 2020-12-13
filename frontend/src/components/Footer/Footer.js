import { animateScroll as scroll } from 'react-scroll'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterText,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterBtnLink,
  FooterBtnWrapper,
  FooterBtn,
} from './FooterElements'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterText>
          Fathom3, Lowfields Business Park, Elant House, Old Power Way, Elland,
          HX5 9DE
        </FooterText>
        <FooterBtnWrapper>
          <FooterBtnLink>
            <FooterBtn>Get in Touch</FooterBtn>
          </FooterBtnLink>
        </FooterBtnWrapper>
        <FooterText>Registered Company: 12272043</FooterText>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Fathom3
            </SocialLogo>
            <WebsiteRights>
              Copyright &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.linkedin.com/company/fathom3/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/fathom3design/?hl=es"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="#" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="#" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="#" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
