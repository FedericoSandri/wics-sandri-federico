import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import MovementsList from './MovementsList';
import AddMovementModal from './AddMovementModal';

const App = () => {
  const [movements, setMovements] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addMovement = (movement) => {
    const newMovements = [...movements, movement];
    newMovements.sort((a, b) => new Date(a.date) - new Date(b.date));
    setMovements(newMovements);
  };

  const calculateTotals = () => {
    const incomes = movements.filter(mov => mov.amount > 0).reduce((acc, mov) => acc + parseFloat(mov.amount), 0);
    const expenses = movements.filter(mov => mov.amount < 0).reduce((acc, mov) => acc + parseFloat(mov.amount), 0);
    const balance = incomes + expenses;

    return { incomes, expenses, balance };
  };

  const totals = calculateTotals();

  return (
    <div className="container mt-4">
      <h2>My Wallet</h2>
      <div className="row">
        <div className="col-md-6">
          <MovementsList movements={movements} />
          <button className="btn btn-primary mt-2" onClick={() => setShowModal(true)}>+</button>
        </div>
        <div className="col-md-6">
          <h3>Entrate: €{totals.incomes.toFixed(2)}</h3>
          <h3>Uscite: €{Math.abs(totals.expenses).toFixed(2)}</h3>
          <h3>Imponibile: €{totals.balance.toFixed(2)}</h3>
        </div>
      </div>
      <AddMovementModal show={showModal} onHide={() => setShowModal(false)} onSave={addMovement} />
    </div>
  );
};

export default App;
