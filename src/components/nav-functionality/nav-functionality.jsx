import { Fragment, useContext, useRef } from "react";
import { ColorModeContext } from "../../contexts/color-mode-context";
import { CartContext } from "../../contexts/cart-context";
import { useClickOutsideCloser } from "../../custom-hooks/use-click-outside-closer";
import Cart from "../cart/cart";
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

  const { cartShowing, toggleCartShowing } = useContext(CartContext);

  const cartRef = useRef(null);
  const showCartRef = useRef(null);

  useClickOutsideCloser(cartShowing, toggleCartShowing, cartRef, showCartRef);

  return (
    <Fragment>
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

          <NavItem onClick={toggleCartShowing} ref={showCartRef}>
            <CartIcon />
          </NavItem>

          <NavItem>
            <UserIcon />
          </NavItem>
        </RightNavBar>
      </NavContainer>

      <Cart insideRef={cartRef} />
    </Fragment>
  );
}

export default NavFunctionality;
