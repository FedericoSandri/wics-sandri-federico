import React from 'react';

const MovementsList = ({ movements }) => {
  return (
    <div>
      <h2>Movimenti</h2>
      <ul className="list-group">
        {movements.map((movement, index) => (
          <li key={index} className="list-group-item">
            {movement.date} - {movement.label}: €{movement.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovementsList;
