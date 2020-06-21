import React, { Component } from 'react';
import RelatedClipList from '../../../molecules/RelatedClips/RelatedClips';

class Secondary extends Component {
  render() {
    return (
      <aside className="home__secondary">
        <h5 className="home__secondary-title">Next Video</h5>
        <RelatedClipList />
      </aside>
    )
  }
}

export default Secondary;
