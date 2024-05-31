import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddMovementModal = ({ show, onHide, onSave }) => {
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSave = () => {
    onSave({ label, amount: parseFloat(amount), date });
    setLabel('');
    setAmount('');
    setDate('');
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Aggiungi Movimento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formLabel">
            <Form.Label>Etichetta</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci etichetta"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formAmount">
            <Form.Label>Importo</Form.Label>
            <Form.Control
              type="number"
              placeholder="Inserisci importo"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Data</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Chiudi
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Aggiungi
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddMovementModal;
