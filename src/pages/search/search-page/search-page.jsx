import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSearchGames } from "../../../custom-hooks/use-search-games";
import RenderIf from "../../../components/render-if/render-if";
import GamesSection from "../../../components/games-section/games-section";
import SelectOption from "../../../components/select-option/select-option";
import {
  SearchPageContainer,
  Message,
  PageChangers,
  PreviousButton,
  NextButton,
  SearchFilters,
} from "./search-page.styles";

import { genres } from "../../../genres";
import { page_sizes } from "../../../page-sizes";

const DEFAULT_QUERY_PARAMS = {
  search: "",
  page: 1,
  page_size: 10,
  genres: [],
};

function SearchPage() {
  const { searchTerm } = useParams();

  const [queryParams, setQueryParams] = useState({
    ...DEFAULT_QUERY_PARAMS,
    search: searchTerm,
  });

  const searchData = useSearchGames(queryParams);

  const pageChangeHandler = (event) => {
    const { value } = event.target;

    if (value === "previous") {
      searchData.previous &&
        setQueryParams({ ...queryParams, page: queryParams.page - 1 });
    } else if (value === "next") {
      searchData.next &&
        setQueryParams({ ...queryParams, page: queryParams.page + 1 });
    }
  };

  const filterMultipleSelectionHandler = (event) => {
    const { name, id, checked } = event.target;
    const { [name]: currentFilter } = queryParams;
    const newCurrentFilter = [...currentFilter];

    if (checked) {
      newCurrentFilter.push(id);
    } else {
      const index = newCurrentFilter.indexOf(id);
      newCurrentFilter.splice(index, 1);
    }

    setQueryParams({ ...queryParams, [name]: newCurrentFilter, page: 1 });
  };

  const filterSingleSelectionHandler = (event) => {
    const { name, value, checked } = event.target;

    if (checked) {
      setQueryParams({ ...queryParams, [name]: value, page: 1 });
    }
  };

  useEffect(() => {
    setQueryParams({ ...queryParams, search: searchTerm, page: 1 });
  }, [searchTerm]);

  return (
    <SearchPageContainer>
      <SearchFilters>
        <SelectOption
          multiple
          selection='genres'
          options={genres}
          onChange={filterMultipleSelectionHandler}
        />

        <SelectOption
          selection='page_size'
          options={page_sizes}
          onChange={filterSingleSelectionHandler}
        />
      </SearchFilters>

      <Fragment>
        <RenderIf condition={searchData && searchData.count !== 0}>
          <GamesSection title='results' games={searchData?.results} />
        </RenderIf>

        <RenderIf condition={searchData && searchData.count === 0}>
          <Message>No Results Found</Message>
        </RenderIf>

        <RenderIf condition={!searchData}>
          <h2>loading.....</h2>
        </RenderIf>
      </Fragment>

      <Fragment>
        <RenderIf condition={searchData?.count}>
          <PageChangers>
            <PreviousButton
              onClick={pageChangeHandler}
              value='previous'
              inactive={!searchData?.previous}
            />

            <NextButton
              onClick={pageChangeHandler}
              value='next'
              inactive={!searchData?.next}
            />
          </PageChangers>
        </RenderIf>
      </Fragment>
    </SearchPageContainer>
  );
}

export default SearchPage;
