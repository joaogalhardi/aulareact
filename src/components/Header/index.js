import P from 'prop-types';
import * as S from './styles';

export default function Header({ titulo }) {
  return (
    <S.HeaderBG>
      <S.Titulo>TÍTULO DA PÁGINA {titulo}</S.Titulo>
    </S.HeaderBG>
  );
}

Header.propTypes = {
  titulo: P.string,
};
