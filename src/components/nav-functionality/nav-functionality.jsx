import { useContext } from "react";
import { ColorModeContext } from "../../contexts/color-mode-context";
import { CartContext } from "../../contexts/cart-context";
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
  const { toggleCartShowing } = useContext(CartContext);

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
          <ColorModeToggler
            checked={usingDarkMode}
            onChange={toggleColorMode}
          />
        </NavItem>

        <NavItem onClick={toggleCartShowing}>
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
