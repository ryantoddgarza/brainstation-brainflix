import React from 'react';
import Player from '../../molecules/Player/Player.jsx';
import Primary from './molecules/Primary';
import Secondary from './molecules/Secondary';

const Home = (props) => {
  return (
    <div className="home">
      <Player data={ props.data } />
      <main className="container home__main-content">
        <div className="home__primary">
          <Primary data={ props.data } />
        </div>
        <aside className="home__secondary">
          <h5 className="home__secondary-title">Next Video</h5>
          <Secondary data={ props.data } />
        </aside>
      </main>
    </div>
  )
}

export default Home;

