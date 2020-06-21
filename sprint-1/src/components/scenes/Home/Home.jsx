import React from 'react';
import Player from '../../molecules/Player/Player.jsx';
import Secondary from './molecules/Secondary';

const Home = () => {
  return (
    <div className="home">
      <Player />
      <main className="home__main-content">
        <div className="home__primary">
          primary
        </div>
        <Secondary />
      </main>
    </div>
  )
}

export default Home;

