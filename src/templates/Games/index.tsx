import { ParsedUrlQueryInput } from 'querystring';
import { useRouter } from 'next/router';

import { QUERY_GAMES, useQueryGames } from 'graphql/queries/games';
import {
  QueryGames,
  QueryGames_games_data,
} from '../../graphql/generated/QueryGames';
import {
  parseQueryStringToFilter,
  parseQueryStringToWhereNew,
} from 'utils/filter';

import Base from 'templates/Base';
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined';

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar';
import GameCard from 'components/GameCard';
import { Grid } from 'components/Grid';

import * as S from './styles';

export type GamesTemplateProps = {
  filterItems: ItemProps[];
};

//////////////////////////////////////////
const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter();

  const { data, loading, fetchMore } = useQueryGames({
    variables: {
      limit: 15,
      filters: parseQueryStringToWhereNew({ queryString: query, filterItems }),
      sort: query.sort as (string | null)[],
    },
  });

  const handleFilter = (items: ParsedUrlQueryInput) => {
    console.log('items page template', items);
    push({
      pathname: '/games',
      query: items,
    });
    return;
  };

  const handleShowMore = () => {
    const currentLength = data?.games?.data?.length || 0;
    // console.log(currentLength);

    // https://stackoverflow.com/questions/62558430/how-does-fetchmore-return-data-to-the-component
    fetchMore({
      query: QUERY_GAMES,
      variables: { limit: 15, start: currentLength },
      updateQuery: (previousResult, { fetchMoreResult }): QueryGames => {
        const previousData: QueryGames_games_data[] =
          previousResult.games?.data || [];
        const newData = fetchMoreResult.games?.data || [];

        const objectGames = {
          games: {
            __typename: previousResult.games!.__typename,
            data: [...previousData, ...newData],
          },
        };

        console.log(objectGames);

        return objectGames;
      },
    });
  };

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems,
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <section>
            <Grid>
              <>
                {data?.games?.data.map((game) => (
                  <GameCard
                    key={game.attributes!.slug}
                    title={game.attributes!.name}
                    slug={game.attributes!.slug}
                    developer={
                      game.attributes!.developers!.data[0].attributes!.name
                    }
                    img={`http://localhost:1337${
                      game.attributes!.cover!.data!.attributes!.url
                    }`}
                    price={game.attributes!.price}
                  />
                ))}
              </>
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  );
};

export default GamesTemplate;
