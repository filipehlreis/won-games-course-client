import { Home, HomeTemplateProps } from 'templates/Home';
import { initializeApollo } from 'utils/apollo';
import { QueryHome } from 'graphql/generated/QueryHome';
import { QUERY_HOME } from 'graphql/queries/home';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

export default function Index(props: HomeTemplateProps) {
  // if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>;

  return <Home {...props} />;
}

// getStaticProps =>> gerar estatico em build time
// getServerSideProps =>> gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps =>> gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)
export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const {
    data: { banners, newGames, upcomingGames, freeGames },
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME });

  return {
    props: {
      revalidate: 60,
      banners: banners!.data.map((banner) => ({
        img: `http://localhost:1337${
          banner.attributes!.image.data?.attributes?.url
        }`,
        title: banner.attributes!.title,
        subtitle: banner.attributes!.subtitle,
        buttonLabel: banner.attributes!.button?.label,
        buttonLink: banner.attributes!.button?.link,
        ...(banner.attributes!.ribbon && {
          ribbon: banner.attributes!.ribbon?.text,
          ribbonColor: banner.attributes!.ribbon?.color,
          ribbonSize: banner.attributes!.ribbon?.size,
        }),
      })),
      newGames: newGames!.data.map((game) => ({
        title: game.attributes!.name,
        slug: game.attributes!.slug,
        developer: game.attributes!.developers!.data[0].attributes!.name,
        img: `http://localhost:1337${
          game.attributes!.cover?.data!.attributes!.url
        }`,
        price: game.attributes!.price,
      })),
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: upcomingGames!.data.map((game) => ({
        title: game.attributes!.name,
        slug: game.attributes!.slug,
        developer: game.attributes!.developers!.data[0].attributes!.name,
        img: `http://localhost:1337${
          game.attributes!.cover?.data!.attributes!.url
        }`,
        price: game.attributes!.price,
      })),
      upcommingHighlight: highlightMock,
      freeGames: freeGames!.data.map((game) => ({
        title: game.attributes!.name,
        slug: game.attributes!.slug,
        developer: game.attributes!.developers!.data[0].attributes!.name,
        img: `http://localhost:1337${
          game.attributes!.cover?.data!.attributes!.url
        }`,
        price: game.attributes!.price,
      })),
      freeHighlight: highlightMock,
    },
  };
}

//ATENCAO:
// os metodos getStaticProps/getServerSideProps SO FUNCIONAM EM PAGES
