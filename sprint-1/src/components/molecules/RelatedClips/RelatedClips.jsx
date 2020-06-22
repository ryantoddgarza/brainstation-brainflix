import React, { Component } from 'react';
import JSON from './data';


class Clip extends Component {
  render() {
    return (
      <div className="related__wrapper">
        <div className="related__card">
          <div className="related__card-image-wrapper">
          <img src={ process.env.PUBLIC_URL + `/images/${this.props.image}` }
          alt="thumb" />
          </div>
          <div className="related__card-info">
          <div className="related__card-title">{ this.props.title }</div>
          <div className="related__card-user">{ this.props.user }</div>
          </div>
        </div>
      </div>
    )
  }
}

const RelatedClips = () => {
  const arr = JSON.related;

  return (
    <div>
      {arr.map((name, i) => {
        return (
          <Clip title={ arr[i].title}
                user={ arr[i].user }
                image={ arr[i].image } />
        )
      }
      )}
    </div>
  )
}

export default RelatedClips;

