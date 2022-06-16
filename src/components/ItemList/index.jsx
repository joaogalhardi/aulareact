import P from 'prop-types';

export const ItemList = ({ name, price, photo }) => {
  return (
    <>
      <h1>{name}</h1>
      <h2>Valor: {price}</h2>
      <img src={photo} alt={name} style={{ width: 400 }} />
      <button onClick={() => alert(`${name} comprado por ${price}`)}>
        CLIQUE AQUI PARA COMPRAR O {name.toUpperCase()}
      </button>
    </>
  );
};

ItemList.propTypes = {
  name: P.string.isRequired,
  photo: P.string.isRequired,
  price: P.string.isRequired,
};
