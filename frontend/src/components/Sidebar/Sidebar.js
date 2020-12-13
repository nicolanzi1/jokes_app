import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="jokes" onClick={toggle}>
            Jokes
          </SidebarLink>
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
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
