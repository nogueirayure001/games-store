import { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";
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

  return (
    <Fragment>
      <SiteHeader>
        <LogoContainer>
          <Title>Wolff Gamestore</Title>

          <Link to='/'>
            <Logo />
          </Link>
        </LogoContainer>

        <NavFunctionality isMenuOpen={isMenuOpen} />

        <MenuToggler onClick={toggleHandler}>
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
