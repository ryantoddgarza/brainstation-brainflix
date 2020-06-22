import React, { Component } from 'react';
import JSON from './commentsData';
import logo from '../../../assets/images/Mohan-muruge.jpg';

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <aside className="comment__aside">
          <img src="" alt="" />
        </aside>
        <div className="comment__body">
          <div className="comment__header">
            <div className="comment__channel">{ this.props.channel }</div>
            <div className="comment__timestamp">{ this.props.timestamp }</div>
          </div>
          <p className="comment__content">{ this.props.content }</p>
          <div className="divider"></div>
        </div>
      </div>
    )
  }
}

class CommentCompose extends Component {
  render() {
    return (
      <div className="comment__compose-wrapper">
        <h5 className="comment__compose-heading">Join the conversation</h5>
        <div className="comment__compose">
          <div className="comments__user-avatar-wrapper">
          <img className="comments__user-avatar" src={logo} alt="user avatar" />
          </div>
          <div className="comment__compose-body">
            <form class="comment__form" action="" id="form">
            <textarea id="commentContent"
              name="comment-content"
            placeholder="Add a comment"></textarea>
            <button type="submit"
              id="submitBtn"
            class="cta comment__submit-button">Comment</button>
            </form>
          </div>
        </div>
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
              content={ path[i].comment } />
        )
      })}
    </section>
  )
}

const Comments = () => {
  return (
    <div class="comments__wrapper">
      <div className="comments__counter">3 Comments</div>
      <CommentCompose />
      <div className="divider"></div>
      <CommentList />
    </div>
  )
}

export default Comments;
