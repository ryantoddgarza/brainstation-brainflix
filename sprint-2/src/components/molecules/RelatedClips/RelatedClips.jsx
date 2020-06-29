import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link key={ arr[i].id }
                  to={'/' + arr[i].id}>
              <Clip data={ props.data }
                    title={ arr[i].title }
                    channel={ arr[i].channel }
                    image={ arr[i].image }
              />
            </Link>
          )
        })}
      </div>
    )
  }
}

export default RelatedClips;

