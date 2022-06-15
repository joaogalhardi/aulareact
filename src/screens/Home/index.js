import React from 'react';
import Header from '../../components/Header';
import { cars } from '../../utils/car';

function Home() {
  return (
    <div>
      <Header titulo="PRINCIPAL" />
      {cars.map((item, index) => {
        return (
          <div key={index} style={{ backgroundColor: item.color }}>
            <h1>{item.name}</h1>
            <h2>Valor: {item.price}</h2>
            <img src={item.photo} alt={item.name} style={{ width: 400 }} />
            <button
              onClick={() => alert(`${item.name} comprado por ${item.price}`)}
            >
              CLIQUE AQUI PARA COMPRAR O {item.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
