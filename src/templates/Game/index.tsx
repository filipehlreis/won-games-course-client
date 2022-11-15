import Base from 'templates/Base';

import * as S from './styles';

const Game = () => {
  return (
    <Base>
      <S.Cover
        src="https://raw.githubusercontent.com/Won-Games/client/48dc534d44bcb0f0175e373093d3c85bc178a353/public/img/games/cyberpunk-1.jpg"
        role="image"
        aria-label="cover"
      />
    </Base>
  );
};

export default Game;
