import { Container } from 'components/Container';
import { Heading } from 'components/Heading';
import Base from 'templates/Base';

// import * as S from './styles';

const Wishlist = () => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>
      </Container>
    </Base>
  );
};

export default Wishlist;
