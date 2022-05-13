import { useContext } from "react";
import { ColorModeContext } from "../../contexts/color-mode-context";
import {
  ColorModeToggler,
  UserIcon,
  CartIcon,
  NavContainer,
  MiddleNavBar,
  RightNavBar,
  NavItem,
  NavLink,
} from "./nav-functionality.styles";

function NavFunctionality({ isMenuOpen }) {
  const { usingDarkMode, toggleColorMode } = useContext(ColorModeContext);

  const handleToggle = () => {
    toggleColorMode(!usingDarkMode);
  };

  return (
    <NavContainer isMenuOpen={isMenuOpen}>
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
          <ColorModeToggler checked={usingDarkMode} onChange={handleToggle} />
        </NavItem>
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
