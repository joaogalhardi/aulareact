import { Link } from 'react-router-dom';
import * as S from './styles';

export default function Header() {
  return (
    <S.HeaderBG>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </nav>
    </S.HeaderBG>
  );
}
