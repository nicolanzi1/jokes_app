import { FaBars } from 'react-icons/fa'
import logo from '../../images/fathom3logo.png'
import { animateScroll as scroll } from 'react-scroll'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" src={logo} onClick={toggleHome}></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="jokes"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-120}
              >
                Jokes
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="identity">Identity</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="approach">Approach</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="values">Values</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="customer">Customers</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="more">More</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
