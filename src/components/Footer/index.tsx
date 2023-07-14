import Heading from 'components/Heading';
import { Logo } from 'components/Logo';
import Link from 'next/link';
import * as S from './styles';

const Footer = () => {
  return (
    <S.Wrapper>
      <Logo color="black" />

      <S.Content>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Contact us
          </Heading>
          <a href="mailto:sac@wongames.com">sac@wongames.com</a>
          <a href="+5512123456789">+55 12 12345-6789</a>
        </S.Column>

        <S.Column aria-labelledby="social-media">
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            Follow us
          </Heading>
          <nav id="social-media">
            <a
              href="https://www.instagram.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.facebook.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </S.Column>

        <S.Column aria-labelledby="resources">
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            Links
          </Heading>

          <nav id="resources">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/">
              <a>Store</a>
            </Link>
            <Link href="/">
              <a>Buscar</a>
            </Link>
          </nav>
        </S.Column>

        <S.Column aria-labelledby="contact">
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            Location
          </Heading>

          <span>Rua 13 de Abril</span>
          <span>527 - 82286240</span>
          <span>São Paulo, Brasil</span>
        </S.Column>
      </S.Content>
      <S.Copyright>Won Games 2020 © All rights reserved.</S.Copyright>
    </S.Wrapper>
  );
};
export default Footer;
