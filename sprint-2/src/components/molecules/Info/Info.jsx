import React, { Component } from 'react';
import axios from 'axios';
import IconViews from './atoms/IconViews';
import IconLikes from './atoms/IconLikes';

class Info extends Component {
  state = {
    metadata: []
  }

  fetchData = () => {
    axios.get(process.env.PUBLIC_URL + '/data.json')
      .then(res => {
        this.setState({
          metadata: res.data.metadata
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const metadata = this.state.metadata;

    if (this.state.metadata.length === 0) {
      return (
        <div className="info__wrapper">Loading...</div>
      )
    } else {
      return (
        <div className="info__wrapper">
          <div className="info__title">{ metadata[0].title }</div>
          <div className="info__meta">
            <div className="info__meta-start">
              <div className="info__channel">By { metadata[0].channel }</div>
              <div className="info__timestamp">{ metadata[0].timestamp }</div>
            </div>
            <div className="info__meta-end">
              <div className="info__views_">
                <IconViews />
                { metadata[0].views }
              </div>
              <div className="info__likes">
                <IconLikes />
                { metadata[0].likes }
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="info__description">{ metadata[0].description }</div>
        </div>
      )
    }
  }
}

export default Info;

