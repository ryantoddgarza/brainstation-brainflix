import React from 'react';
import Clip from './molecules/Clip';

const RelatedClips = (props) => {
  const arr = props.data.videos;

  if (!props.data.videos) {
    return (
      <div>Loading..</div>
    )
  } else {
    return (
      <div>
        {arr.map((item, i) => {
          return (
            <Clip key={i}
                  title={ arr[i].title }
                  channel={ arr[i].channel }
                  image={ arr[i].image } />
          )
        })}
      </div>
    )
  }
}

export default RelatedClips;

