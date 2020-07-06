import React from 'react';
import axios from 'axios';

import UserAvatar from '../../../atoms/UserAvatar';
import usrImg from '../../../../assets/images/Mohan-muruge.jpg';

const CommentCompose = (props) => {
  const data = props.data;

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`/videos/${data.active.id}`, {
      comment: e.target.commentContent.value
    })
  }

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
                id="form"
                onSubmit={handleSubmit}>
          <textarea id="commentContent"
                    className="textarea"
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

export default CommentCompose;

