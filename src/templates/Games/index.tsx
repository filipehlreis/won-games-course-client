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

import xor from 'lodash.xor';

import Base from 'templates/Base';
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined';

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar';
import GameCard from 'components/GameCard';
import { Grid } from 'components/Grid';

import * as S from './styles';
import Empty from 'components/Empty';

export type GamesTemplateProps = {
  filterItems: ItemProps[];
};

//////////////////////////////////////////
const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter();

  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      filters: parseQueryStringToWhereNew({ queryString: query, filterItems }),
      sort: ['price:desc', 'id:asc'],
      // sort: query.sort as (string | null)[],
    },
  });

  if (!data?.games?.data) return <p>loading ...</p>;

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items,
    });
    return;
  };
  /**
   * Need to test the updateQuery, it's comming [] for previousData
   *
   *
   */
  const dataLength = data?.games?.data?.length || 0;
  const totalPagination = data?.games?.meta.pagination.total || 0;
  const hasMoreGames = dataLength < totalPagination;

  const handleShowMore = () => {
    const currentLength = data!.games!.data!.length || 0;
    console.log('currentLength', currentLength);

    // https://stackoverflow.com/questions/62558430/how-does-fetchmore-return-data-to-the-component
    fetchMore({
      query: QUERY_GAMES,
      variables: {
        limit: 15,
        filters: parseQueryStringToWhereNew({
          queryString: query,
          filterItems,
        }),
        sort: ['price:desc', 'id:asc'],
        // sort: query.sort as (string | null)[],
        start: currentLength,
      },
      updateQuery: (previousResult, { fetchMoreResult }): QueryGames => {
        if (!fetchMoreResult) return previousResult;

        // console.log('currentLength', currentLength);

        const previousData: QueryGames_games_data[] =
          previousResult.games?.data || data.games?.data || [];
        // console.log('previousData,:', previousData);

        const newData = fetchMoreResult.games?.data || [];

        // console.log('newData,:', newData);

        const newMeta = fetchMoreResult.games!.meta;

        const newUniqueData = xor(previousData, newData);

        // const newnewnenwData = [...previousData, ...newNewData];

        const objectGames: QueryGames = {
          games: {
            __typename: 'GameEntityResponseCollection',
            meta: newMeta,
            // __typename: previousResult.games!.__typename,
            // __typename: 'GameEntityResponseCollection',
            data: newUniqueData,
          },
        };

        console.log('objectGames', objectGames);

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

        <section>
          <span style={{ color: 'red' }}>
            {totalPagination} jogos encontrados
          </span>

          {data!.games!.data.length ? (
            <>
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
              {hasMoreGames && (
                <S.ShowMore>
                  {loading ? (
                    <S.ShowMoreLoading
                      src="/img/dots.svg"
                      alt="Loading more games..."
                    />
                  ) : (
                    <S.ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>Show More</p>
                      <ArrowDown size={35} />
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <Empty
              title=":("
              description="We didn't find any games with this filter"
            />
          )}
        </section>
      </S.Main>
    </Base>
  );
};

export default GamesTemplate;
