import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

import { Home, HomeTemplateProps } from 'templates/Home';

import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

export default function Index(props: HomeTemplateProps) {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
  });

  client.query({
    query: gql`
      query getGames {
        games {
          data {
            attributes {
              name
            }
          }
        }
      }
    `,
  });

  return <Home {...props} />;
}

// getStaticProps =>> gerar estatico em build time
// getServerSideProps =>> gerar via ssr a cada request
// getInitialProps =>> gerar via ssr a cada request
export function getServerSideProps() {
  // faz a logica
  // pode ser buscar dados numa API
  // fazer calculo/leitura de context
  // retorno dos dados
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighlight: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock,
    },
  };
}

//ATENCAO:
// os metodos getStaticProps/getServerSideProps SO FUNCIONAM EM PAGES
