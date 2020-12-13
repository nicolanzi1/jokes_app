import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="identity" onClick={toggle}>
            Identity
          </SidebarLink>
          <SidebarLink to="approach" onClick={toggle}>
            Approach
          </SidebarLink>
          <SidebarLink to="values" onClick={toggle}>
            Values
          </SidebarLink>
          <SidebarLink to="customers" onClick={toggle}>
            Customers
          </SidebarLink>
          <SidebarLink to="more" onClick={toggle}>
            More
          </SidebarLink>
          <SidebarLink to="jokes" onClick={toggle}>
            Jokes
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
