import React from 'react';

const Home = () => {
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const hStyle = { alignSelf: 'flex-start', margin: '0 0 2% 10%' };

  return (
    <div style={divStyle}>
      <h4 style={hStyle}>Welcome to our Page!</h4>
      <p style={{ width: '85%' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
        veritatis ut adipisci? Nesciunt perferendis quam aliquid laudantium iure
        suscipit assumenda eum rerum natus molestias temporibus asperiores
        tempore ut mollitia ipsum quas dignissimos, ea illo totam excepturi,
        fugit minus nulla earum rem! Aliquid laudantium perferendis incidunt,
        sed suscipit veniam excepturi cum voluptatibus nisi in magni, delectus
        facilis quia totam et recusandae ipsum consequuntur eveniet numquam id
        pariatur. Eum aut nemo cum labore nulla, architecto minus. Molestias
        quae praesentium laboriosam repellendus necessitatibus neque
        consequuntur aliquid, corrupti rem, placeat ratione et consequatur nulla
        impedit, doloremque quam amet aut incidunt id error. Architecto, sed?
      </p>
      <p style={{ width: '85%' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
        veritatis ut adipisci? Nesciunt perferendis quam aliquid laudantium iure
        suscipit assumenda eum rerum natus molestias temporibus asperiores
        tempore ut mollitia ipsum quas dignissimos, ea illo totam excepturi,
        fugit minus nulla earum rem! Aliquid laudantium perferendis incidunt,
        sed suscipit veniam excepturi cum voluptatibus nisi in magni, delectus
        facilis quia totam et recusandae ipsum consequuntur eveniet numquam id
        pariatur. Eum aut nemo cum labore nulla, architecto minus. Molestias
        quae praesentium laboriosam repellendus necessitatibus neque
        consequuntur aliquid, corrupti rem, placeat ratione et consequatur nulla
        impedit, doloremque quam amet aut incidunt id error. Architecto, sed?
      </p>
    </div>
  );
};

export default Home;
