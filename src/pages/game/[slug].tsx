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
      gameInfo: {
        title: 'Cyberpunk 2077',
        price: '59.00',
        description:
          'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality',
      },
    },
  };
}
