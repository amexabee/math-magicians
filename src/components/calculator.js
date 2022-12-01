import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <fragment>
        <div className="container m-2">
          <div className="row">
            <button type="submit" className="col-4 btn btn-secondary text-end">
              0
            </button>
          </div>
          <div className="row">
            <button
              type="submit"
              className="col-1 btn btn-light border border-secondary"
            >
              AC
            </button>

            <button
              type="submit"
              className="col-1 btn btn-light border border-secondary"
            >
              +/-
            </button>

            <button
              type="submit"
              className="col-1 btn btn-light border border-secondary"
            >
              %
            </button>

            <button
              type="submit"
              className="col-1 btn btn-warning border border-secondary"
            >
              /
            </button>
          </div>
          <div className="row">
            <button
              type="submit"
              className="col-1 btn btn-light border border-secondary"
            >
              7
            </button>

            <button
              type="submit"
              className="col-1 btn btn-light border border-secondary"
            >
              8
            </button>

            <button
              type="submit"
              className="col-1 btn btn-light border border-secondary"
            >
              9
            </button>

            <button
              type="submit"
              className="col-1 btn btn-warning border border-secondary"
            >
              *
            </button>
          </div>
          <div className="row">
            <button
              type="submit"
              className="col-1 btn btn-light border border-secondary"
            >
              4
            </button>

            <button
              type="submit"
              className="col-1 btn btn-light border border-secondary"
            >
              5
            </button>

            <button
              type="submit"
              className="col-1 btn btn-light border border-secondary"
            >
              6
            </button>

            <button
              type="submit"
              className="col-1 btn btn-warning border border-secondary"
            >
              -
            </button>
          </div>
          <div className="row">
            <button
              type="submit"
              className="col-1 btn btn-light border border-secondary"
            >
              1
            </button>

            <button
              type="submit"
              className="col-1 btn btn-light border border-secondary"
            >
              2
            </button>

            <button
              type="submit"
              className="col-1 btn btn-light border border-secondary"
            >
              3
            </button>

            <button
              type="submit"
              className="col-1 btn btn-warning border border-secondary"
            >
              +
            </button>
          </div>
        </div>
      </fragment>
    );
  }
}

export default Calculator;
