import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      calculatorObject: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  clicked = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState(result);
  };

  render() {
    const { total, next } = this.state;
    return (
      <>
        <div className="container m-2">
          <div className="row">
            <button type="button" className="col-4 btn btn-secondary text-end">
              {next || total || 0}
            </button>
          </div>
          <div className="row">
            <button
              type="button"
              className="col-1 btn btn-light border border-secondary"
              onClick={this.clicked}
            >
              AC
            </button>

            <button
              type="button"
              className="col-1 btn btn-light border border-secondary"
              onClick={this.clicked}
            >
              +/-
            </button>

            <button
              type="button"
              className="col-1 btn btn-light border border-secondary"
              onClick={this.clicked}
            >
              %
            </button>

            <button
              type="button"
              className="col-1 btn btn-warning border border-secondary operation"
              onClick={this.clicked}
            >
              ÷
            </button>
          </div>
          <div className="row">
            <button
              type="button"
              className="col-1 btn btn-light border border-secondary"
              onClick={this.clicked}
            >
              7
            </button>

            <button
              type="button"
              className="col-1 btn btn-light border border-secondary"
              onClick={this.clicked}
            >
              8
            </button>

            <button
              type="button"
              className="col-1 btn btn-light border border-secondary"
              onClick={this.clicked}
            >
              9
            </button>

            <button
              type="button"
              className="col-1 btn btn-warning border border-secondary operation"
              onClick={this.clicked}
            >
              x
            </button>
          </div>
          <div className="row">
            <button
              type="button"
              className="col-1 btn btn-light border border-secondary"
              onClick={this.clicked}
            >
              4
            </button>

            <button
              type="button"
              className="col-1 btn btn-light border border-secondary"
              onClick={this.clicked}
            >
              5
            </button>

            <button
              type="button"
              className="col-1 btn btn-light border border-secondary"
              onClick={this.clicked}
            >
              6
            </button>

            <button
              type="button"
              className="col-1 btn btn-warning border border-secondary operation"
              onClick={this.clicked}
            >
              -
            </button>
          </div>
          <div className="row">
            <button
              type="button"
              className="col-1 btn btn-light border border-secondary"
              onClick={this.clicked}
            >
              1
            </button>

            <button
              type="button"
              className="col-1 btn btn-light border border-secondary"
              onClick={this.clicked}
            >
              2
            </button>

            <button
              type="button"
              className="col-1 btn btn-light border border-secondary"
              onClick={this.clicked}
            >
              3
            </button>

            <button
              type="button"
              className="col-1 btn btn-warning border border-secondary operation"
              onClick={this.clicked}
            >
              +
            </button>
          </div>
          <div className="row">
            <button
              type="button"
              className="col-2 btn btn-light border border-secondary"
              onClick={this.clicked}
            >
              0
            </button>

            <button
              type="button"
              className="col-1 btn btn-light border border-secondary"
              onClick={this.clicked}
            >
              .
            </button>

            <button
              type="button"
              className="col-1 btn btn-warning border border-secondary operation"
              onClick={this.clicked}
            >
              =
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
