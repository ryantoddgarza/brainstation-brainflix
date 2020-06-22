import React, { Component } from 'react';
import JSON from './commentsData';
import logo from '../../../assets/images/Mohan-muruge.jpg';

class Comment extends Component {
  render() {
    return (
      <div class="comment">
        <div>{ this.props.channel }</div>
        <div>{ this.props.timestamp }</div>
        <div>{ this.props.comment }</div>
      </div>
    )
  }
}

const CommentList = () => {
  const path = JSON.metadata[0].comments.content;
  return (
    <section className="comment__list">
      {path.map((item, i) => {
        return (
          <Comment channel={ path[i].channel }
              timestamp={ path[i].timestamp }
              comment={ path[i].comment } />
        )
      })}
    </section>
  )
}

const Comments = () => {
  return (
    <div class="comments__wrapper">
      <div className="comments__counter">3 Comments</div>
      <div className="comments__compose">
        <div className="comments__user-avatar-wrapper">
          <img className="comments__user-avatar" src={logo} alt="user avatar" />
        </div>
        <div className="comments__compose-form"></div>
      </div>
      <div className="divider"></div>
      <CommentList />
    </div>
  )
}

export default Comments;
