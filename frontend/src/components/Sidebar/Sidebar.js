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

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="identity">Identity</SidebarLink>
          <SidebarLink to="approach">Approach</SidebarLink>
          <SidebarLink to="values">Values</SidebarLink>
          <SidebarLink to="customers">Customers</SidebarLink>
          <SidebarLink to="more">More</SidebarLink>
          <SidebarLink to="jokes">Jokes</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
