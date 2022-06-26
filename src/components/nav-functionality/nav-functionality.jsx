import React, { Fragment, useContext, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCartShowing } from "../../store/cart/cart.selectors";
import { toggleCartShowing } from "../../store/cart/cart.actions";
import { ColorModeContext } from "../../contexts/color-mode-context";
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
import AuthBox from "../auth-box/auth-box";

function NavFunctionality({ isMenuOpen }) {
  const { usingDarkMode, toggleColorMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();

  const toggleCartHandler = () => dispatch(toggleCartShowing());

  const cartShowing = useSelector(selectCartShowing);
  const cartRef = useRef(null);
  const showCartRef = useRef(null);
  useClickOutsideCloser(cartShowing, toggleCartHandler, cartRef, showCartRef);

  const [authBoxShowing, setAuthBoxShowing] = useState(false);
  const toggleAuthBoxShowing = () => setAuthBoxShowing(!authBoxShowing);
  const authBoxRef = useRef(null);
  const showAuthBoxRef = useRef(null);
  useClickOutsideCloser(
    authBoxShowing,
    toggleAuthBoxShowing,
    authBoxRef,
    showAuthBoxRef
  );

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

          <NavItem onClick={toggleCartHandler} ref={showCartRef}>
            <CartIcon />
          </NavItem>

          <NavItem onClick={toggleAuthBoxShowing} ref={showAuthBoxRef}>
            <UserIcon />
          </NavItem>
        </RightNavBar>
      </NavContainer>

      <Cart insideRef={cartRef} />

      <AuthBox shouldDisplay={authBoxShowing} insideRef={authBoxRef} />
    </Fragment>
  );
}

export default NavFunctionality;
