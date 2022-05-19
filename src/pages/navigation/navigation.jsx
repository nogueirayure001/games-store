import { Fragment, useState, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import { useClickOutsideCloser } from "../../custom-hooks/use-click-outside-closer";
import NavFunctionality from "../../components/nav-functionality/nav-functionality";
import {
  SiteHeader,
  LogoContainer,
  Title,
  Logo,
  MenuTogglerIcon,
  MenuToggler,
  Main,
} from "./navigation.styles";

function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleHandler = () => setMenuOpen(!isMenuOpen);

  const menuAreaRef = useRef();
  const menuOpenerRef = useRef();

  useClickOutsideCloser(isMenuOpen, toggleHandler, menuAreaRef, menuOpenerRef);

  return (
    <Fragment>
      <SiteHeader ref={menuAreaRef}>
        <LogoContainer>
          <Title>Wolff Gamestore</Title>

          <Link to='/'>
            <Logo />
          </Link>
        </LogoContainer>

        <NavFunctionality isMenuOpen={isMenuOpen} />

        <MenuToggler onClick={toggleHandler} ref={menuOpenerRef}>
          <MenuTogglerIcon isMenuOpen={isMenuOpen} />
        </MenuToggler>
      </SiteHeader>

      <Main>
        <Outlet />
      </Main>
    </Fragment>
  );
}

export default Navigation;
