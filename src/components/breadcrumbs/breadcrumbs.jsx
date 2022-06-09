import React, { Fragment } from "react";
import { BreadcrumbsContainer, Breadcrumb } from "./breadcrumbs.styles";

function Breadcrumbs({
  type = "default",
  games,
  screenshots,
  breadcrumbsConfigs,
  handleClick,
  active,
}) {
  const BREADCRUMBS = {
    default: (
      <Fragment>
        {games?.map((game, index) => (
          <Breadcrumb
            key={game.id}
            id={game.id}
            image={game.background_image}
            onClick={handleClick}
            active={active === index}
            {...breadcrumbsConfigs}
          />
        ))}
      </Fragment>
    ),
    sameGame: (
      <Fragment>
        {screenshots?.map(({ id, image }, index) => (
          <Breadcrumb
            key={id}
            id={id}
            image={image}
            onClick={handleClick}
            active={active === index}
            {...breadcrumbsConfigs}
          />
        ))}
      </Fragment>
    ),
  };

  return (
    <BreadcrumbsContainer {...breadcrumbsConfigs}>
      {BREADCRUMBS[type]}
    </BreadcrumbsContainer>
  );
}

export default Breadcrumbs;
