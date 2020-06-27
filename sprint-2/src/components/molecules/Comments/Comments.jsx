import React from 'react';
import UserAvatar from '../../atoms/UserAvatar';
import JSON from './commentsData';
import usrImg from '../../../assets/images/Mohan-muruge.jpg';

const Comment = (props) => {
  return (
    <div className="comment">
      <aside className="comment__aside">
        <div className="comment__user-avatar-wrapper">
          <UserAvatar src="" />
        </div>
      </aside>
      <div className="comment__body">
        <div className="comment__header">
          <div className="comment__channel">{ props.channel }</div>
          <div className="comment__timestamp">{ props.timestamp }</div>
        </div>
        <p className="comment__content">{ props.content }</p>
        <div className="divider"></div>
      </div>
    </div>
  )
}

const CommentCompose = () => {
  return (
    <div className="comment__compose-wrapper">
      <h5 className="comment__compose-heading">Join the conversation</h5>
      <div className="comment__compose">
        <div className="comment__aside">
          <div className="comments__user-avatar-wrapper">
            <UserAvatar src={ usrImg } />
          </div>
        </div>
        <div className="comment__compose-body">
          <form className="comment__form"
                action=""
                id="form">
          <textarea id="commentContent"
                    name="comment-content"
                    placeholder="Add a comment"></textarea>
          <button type="submit"
                  id="submitBtn"
                  className="cta comment__submit-button">Comment</button>
          </form>
        </div>
      </div>
    </div>
  )
}

const CommentList = () => {
  const path = JSON.metadata[0].comments.content;
  return (
    <section className="comment__list">
      {path.map((item, i) => {
        return (
          <Comment key={i}
                   channel={ path[i].channel }
                   timestamp={ path[i].timestamp }
                   content={ path[i].comment } />
        )
      })}
    </section>
  )
}

const Comments = () => {
  return (
    <div className="comments__wrapper">
      <div className="comments__counter">3 Comments</div>
      <CommentCompose />
      <div className="divider"></div>
      <CommentList />
    </div>
  )
}

export default Comments;

