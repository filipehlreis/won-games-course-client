import * as S from './styles';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
};

export const Checkbox = ({ label, labelFor = '' }: CheckboxProps) => {
  return (
    <S.Wrapper>
      <input id={labelFor} type="checkbox" />
      {!!label && <label htmlFor={labelFor}>{label}</label>}
    </S.Wrapper>
  );
};
