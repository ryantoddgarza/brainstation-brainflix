import React from 'react';
import Player from '../../molecules/Player/Player.jsx';

const Home = () => {
  return (
    <div className="home">
      <div className="player__area-wrapper">
        <Player />
      </div>
      <main className="home__main-content">
        <div className="home__primary">primary</div>
        <div className="home__secondary">secondary</div>
      </main>
    </div>
  )
}

export default Home;

