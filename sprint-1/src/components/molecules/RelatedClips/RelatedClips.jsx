import React, { Component } from 'react';
import JSON from './data';
import axios from 'axios';

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
          <div className="related__card-channel">{ this.props.channel }</div>
          </div>
        </div>
      </div>
    )
  }
}

class RelatedClips extends Component {
  fetchData() {
    axios.get(process.env.PUBLIC_URL + '/data.json')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const arr = JSON.related;

    return (
      <div>
        {arr.map((item, i) => {
          return (
            <Clip title={ arr[i].title }
                  channel={ arr[i].channel }
                  image={ arr[i].image } />
          )
        })}
      </div>
    )
  }
}

export default RelatedClips;

