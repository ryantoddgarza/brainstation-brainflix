import React from 'react';
import { Link } from 'react-router-dom';
import Clip from './molecules/Clip';

const RelatedClips = (props) => {
  const videoArr = props.data.videos;
  const filtered = videoArr.filter(videoObj => videoObj.id !== props.data.active.id);

  if (!videoArr) {
    return null;
  }

  return (
    <div>
      {filtered.map((item, i) => {
        return (
          <Link key={ filtered[i].id }
                to={'/' + filtered[i].id}>
            <Clip data={ props.data }
                  title={ filtered[i].title }
                  channel={ filtered[i].channel }
                  image={ filtered[i].image }
            />
          </Link>
        )
      })}
    </div>
  )
}

export default RelatedClips;

