import React from 'react';

const Quotes = () => {
  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40vh',
  };
  return (
    <div style={divStyle}>
      <h5 style={{ width: '50%' }}>
        Mathematics is not about numbers, equations, computations, or
        algorithms: it is about understanding. —William Paul Thurston
      </h5>
    </div>
  );
};

export default Quotes;
