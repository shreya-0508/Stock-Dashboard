import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Example.css';
import amzn_training from './AMZN_training.jpeg';
import amzn_validation from './AMZN_validation.jpeg';
import amzn_testing from './AMZN_testing.jpeg';
import amzn_final from './AMZN_finalprediction.jpeg';
import amzn_acc from './AMZN_accuracy.png';

import aapl_training from './AAPL_training.jpeg';
import aapl_validation from './AAPL_validation.jpeg';
import aapl_testing from './AAPL_testing.jpeg';
import aapl_final from './AAPL_final.jpeg';
import aapl_acc from './AAPL_accuracy.png';

const Example = ({ name }) => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <div className="example">
      {values.map((v, idx) => (
        <Button
          key={idx}
          className="me-2 mb-2 button-36"
          onClick={() => handleShow(v)}
        >
          Prediction of ticker
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Analysis</Modal.Title>
        </Modal.Header>
        {name && (
          <Modal.Body>
            <h2>{name}</h2>
            {name === 'AMZN' && <br />}
            {name === 'AMZN' && <h3>Training Analysis</h3>}
            <div>{name === 'AMZN' && <img src={amzn_training} alt="" />}</div>
            {name === 'AMZN' && <br />}
            {name === 'AMZN' && <h3>Validation Analysis</h3>}
            <div>{name === 'AMZN' && <img src={amzn_validation} alt="" />}</div>
            {name === 'AMZN' && <br />}
            {name === 'AMZN' && <h3>Testing Analysis</h3>}
            <div>{name === 'AMZN' && <img src={amzn_testing} alt="" />}</div>
            {name === 'AMZN' && <br />}
            {name === 'AMZN' && <h3>Final Prediction</h3>}
            <div>{name === 'AMZN' && <img src={amzn_final} alt="" />}</div>
            {name === 'AMZN' && <br />}
            {name === 'AMZN' && <h3>Accuracy</h3>}
            <div>{name === 'AMZN' && <img src={amzn_acc} alt="" />}</div>

            {name === 'AAPL' && <br />}
            {name === 'AAPL' && <h3>Training Analysis</h3>}
            <div>{name === 'AAPL' && <img src={aapl_training} alt="" />}</div>
            {name === 'AAPL' && <br />}
            {name === 'AAPL' && <h3>Validation Analysis</h3>}
            <div>{name === 'AAPL' && <img src={aapl_validation} alt="" />}</div>
            {name === 'AAPL' && <br />}
            {name === 'AAPL' && <h3>Testing Analysis</h3>}
            <div>{name === 'AAPL' && <img src={aapl_testing} alt="" />}</div>
            {name === 'AAPL' && <br />}
            {name === 'AAPL' && <h3>Final Prediction</h3>}
            <div>{name === 'AAPL' && <img src={aapl_final} alt="" />}</div>
            {name === 'AAPL' && <br />}
            {name === 'AAPL' && <h3>Accuracy</h3>}
            <div>{name === 'AAPL' && <img src={aapl_acc} alt="" />}</div>
          </Modal.Body>
        )}
      </Modal>
    </div>
  );
};

export default Example;
