import * as S from './styles';
import { ItemList } from '../../components/ItemList';
import { cars } from '../../utils/car';

function Home() {
  return (
    <>
      <ul>
        {cars.map(({ id, name, price, photo, color }) => (
          <S.Container key={id} bg={color}>
            <ItemList name={name} photo={photo} price={price} />
          </S.Container>
        ))}
      </ul>
    </>
  );
}

export default Home;
