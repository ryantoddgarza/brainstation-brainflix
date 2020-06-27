import React, { Component } from 'react';
import axios from 'axios';

const Clip = (props) => {
  return (
    <div className="related__wrapper">
      <div className="related__card">
        <div className="related__card-image-wrapper">
        <img src={ process.env.PUBLIC_URL + '/images/' +  props.image } alt="" />
        </div>
        <div className="related__card-info">
        <div className="related__card-title">{ props.title }</div>
        <div className="related__card-channel">{ props.channel }</div>
        </div>
      </div>
    </div>
  )
}

class RelatedClips extends Component {
  state = {
    related: []
  }

  fetchData = () => {
    axios.get(process.env.PUBLIC_URL + '/data.json')
      .then(res => {
        this.setState({
          related: res.data.related
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const arr = this.state.related;

    if (this.state.related.length === 0) {
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
}

export default RelatedClips;

