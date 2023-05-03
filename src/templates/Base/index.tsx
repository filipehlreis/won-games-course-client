import { Container } from 'components/Container';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import * as S from './styles';
import { useSession } from 'next-auth/react';

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => {
  const { data: session, status } = useSession();

  // console.log('status da base', status);

  // console.log('status da base', session);

  return (
    <S.Wrapper>
      <Container>
        {/* <Menu username={session ? session.user!.name : null} /> */}
        <Menu
          username={status === 'loading' ? null : session?.user?.name}
          loading={status === 'loading' ? 'loading' : null}
        />
      </Container>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  );
};

export default Base;
