import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorObject, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clicked = (e) => {
    const result = calculate(calculatorObject, e.target.textContent);
    setState(result);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <h3>Let&apos;s do some math!</h3>
      <div className="container m-2 calculator">
        <div className="row">
          <button type="button" className="col-12 btn btn-secondary text-end">
            {calculatorObject.next || calculatorObject.total || 0}
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            className="col-3 btn btn-light border border-secondary"
            onClick={clicked}
          >
            AC
          </button>

          <button
            type="button"
            className="col-3 btn btn-light border border-secondary"
            onClick={clicked}
          >
            +/-
          </button>

          <button
            type="button"
            className="col-3 btn btn-light border border-secondary"
            onClick={clicked}
          >
            %
          </button>

          <button
            type="button"
            className="col-3 btn btn-warning border border-secondary operation"
            onClick={clicked}
          >
            ÷
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            className="col-3 btn btn-light border border-secondary"
            onClick={clicked}
          >
            7
          </button>

          <button
            type="button"
            className="col-3 btn btn-light border border-secondary"
            onClick={clicked}
          >
            8
          </button>

          <button
            type="button"
            className="col-3 btn btn-light border border-secondary"
            onClick={clicked}
          >
            9
          </button>

          <button
            type="button"
            className="col-3 btn btn-warning border border-secondary operation"
            onClick={clicked}
          >
            x
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            className="col-3 btn btn-light border border-secondary"
            onClick={clicked}
          >
            4
          </button>

          <button
            type="button"
            className="col-3 btn btn-light border border-secondary"
            onClick={clicked}
          >
            5
          </button>

          <button
            type="button"
            className="col-3 btn btn-light border border-secondary"
            onClick={clicked}
          >
            6
          </button>

          <button
            type="button"
            className="col-3 btn btn-warning border border-secondary operation"
            onClick={clicked}
          >
            -
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            className="col-3 btn btn-light border border-secondary"
            onClick={clicked}
          >
            1
          </button>

          <button
            type="button"
            className="col-3 btn btn-light border border-secondary"
            onClick={clicked}
          >
            2
          </button>

          <button
            type="button"
            className="col-3 btn btn-light border border-secondary"
            onClick={clicked}
          >
            3
          </button>

          <button
            type="button"
            className="col-3 btn btn-warning border border-secondary operation"
            onClick={clicked}
          >
            +
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            className="col-6 btn btn-light border border-secondary"
            onClick={clicked}
          >
            0
          </button>

          <button
            type="button"
            className="col-3 btn btn-light border border-secondary"
            onClick={clicked}
          >
            .
          </button>

          <button
            type="button"
            className="col-3 btn btn-warning border border-secondary operation"
            onClick={clicked}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
