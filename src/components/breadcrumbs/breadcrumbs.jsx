import { BreadcrumbsContainer, Breadcrumb } from "./breadcrumbs.styles";

function Breadcrumbs({ games, breadcrumbsConfigs, handleClick, active }) {
  return (
    <BreadcrumbsContainer {...breadcrumbsConfigs}>
      {games.map((game, index) => (
        <Breadcrumb
          key={game.id}
          id={game.id}
          image={game.background_image}
          onClick={handleClick}
          active={active === index}
          {...breadcrumbsConfigs}
        />
      ))}
    </BreadcrumbsContainer>
  );
}

export default Breadcrumbs;
