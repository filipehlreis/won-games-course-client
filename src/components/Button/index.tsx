import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
};

export const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
}: ButtonProps) => {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth}>
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
};
