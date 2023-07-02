import React from 'react';

function ItemListContainer({ welcomeMessage }) {
  return (
    <div className="container text-center">
      <h2>{welcomeMessage}</h2>
    </div>
  );
}

export default ItemListContainer;