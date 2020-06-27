import React from 'react';
import Player from '../../molecules/Player/Player.jsx';
import Primary from './molecules/Primary';
import Secondary from './molecules/Secondary';

const Home = () => {
  return (
    <div className="home">
      <Player />
      <main className="container home__main-content">
        <div className="home__primary">
          <Primary />
        </div>
        <aside className="home__secondary">
          <h5 className="home__secondary-title">Next Video</h5>
          <Secondary />
        </aside>
      </main>
    </div>
  )
}

export default Home;

