import Game, { GameTemplateProps } from 'templates/Game';

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />;
}

// gerar em build time (/game/bla, /game/foo ...)
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'cyberpunk-2077' } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {
      cover:
        'https://raw.githubusercontent.com/Won-Games/client/48dc534d44bcb0f0175e373093d3c85bc178a353/public/img/games/cyberpunk-1.jpg',
    },
  };
}
