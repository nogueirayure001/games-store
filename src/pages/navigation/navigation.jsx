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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleHandler = () => setMenuOpen(!menuOpen);

  return (
    <Fragment>
      <SiteHeader>
        <LogoContainer>
          <Title>Wolff Gamestore</Title>

          <Link to='/'>
            <Logo />
          </Link>
        </LogoContainer>

        <NavFunctionality menuOpen={menuOpen} />

        <MenuToggler onClick={toggleHandler}>
          <MenuTogglerIcon menuOpen={menuOpen} />
        </MenuToggler>
      </SiteHeader>

      <Main>
        <Outlet />
      </Main>
    </Fragment>
  );
}

export default Navigation;
