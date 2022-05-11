import { Fragment } from "react";
import CarrosselMultiItem from "../carrossel-multi-item/carrossel-multi-item";

function ItemsSplitter({ itemsToSplit, splitValue = 4 }) {
  return (
    <Fragment>
      {itemsToSplit
        .reduce((acc, current, index) => {
          if (index % splitValue === 0) {
            return [[current], ...acc];
          } else {
            const [head, ...tails] = acc;
            return [[...head, current], ...tails];
          }
        }, [])
        .reverse()
        .map((games, index) => (
          <CarrosselMultiItem key={index} games={games} columns={splitValue} />
        ))}
    </Fragment>
  );
}

export default ItemsSplitter;
