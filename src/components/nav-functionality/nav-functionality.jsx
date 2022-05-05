import {
  UserIcon,
  CartIcon,
  NavContainer,
  MiddleNavBar,
  RightNavBar,
  NavItem,
  NavLink,
} from "./nav-functionality.styles";

function NavFunctionality({ menuOpen }) {
  return (
    <NavContainer menuOpen={menuOpen}>
      <MiddleNavBar>
        <NavItem>
          <NavLink to='/'>Home</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to='questions-and-answers'>Q & A</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to='contact'>Contact</NavLink>
        </NavItem>
      </MiddleNavBar>

      <RightNavBar>
        <NavItem>
          <CartIcon />
        </NavItem>

        <NavItem>
          <UserIcon />
        </NavItem>
      </RightNavBar>
    </NavContainer>
  );
}

export default NavFunctionality;
