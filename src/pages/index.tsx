import { Home, HomeTemplateProps } from 'templates/Home';
import { initializeApollo } from 'utils/apollo';
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome';
import { QUERY_HOME } from 'graphql/queries/home';
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers';

export default function Index(props: HomeTemplateProps) {
  // if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>;

  return <Home {...props} />;
}

// getStaticProps =>> gerar estatico em build time
// getServerSideProps =>> gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps =>> gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)
export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const TODAY = new Date().toISOString().slice(0, 10);

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections },
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: {
      date: TODAY,
    },
  });

  const sectionsHome = sections!.data!.attributes;

  return {
    props: {
      revalidate: 60,
      banners: bannerMapper(banners!),
      newGamesTitle: sectionsHome!.newGames?.title,
      newGames: gamesMapper(newGames),
      mostPopularGamesTitle: sectionsHome!.popularGames?.title,
      mostPopularHighlight: highlightMapper(
        sectionsHome?.popularGames?.highlight,
      ),
      mostPopularGames: gamesMapper(sectionsHome!.popularGames!.games!),
      upcomingGamesTitle: sections!.data!.attributes!.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight: highlightMapper(
        sectionsHome?.upcomingGames?.highlight,
      ),
      freeGamesTitle: sections!.data!.attributes!.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sectionsHome?.freeGames?.highlight),
    },
  };
}

//ATENCAO:
// os metodos getStaticProps/getServerSideProps SO FUNCIONAM EM PAGES
