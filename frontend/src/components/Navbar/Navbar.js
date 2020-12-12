import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Fathom3</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
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
            <NavItem>
              <NavLinks to="jokes">Jokes</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
