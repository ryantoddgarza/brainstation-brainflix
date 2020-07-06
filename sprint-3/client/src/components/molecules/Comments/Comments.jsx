import React from 'react';
import CommentCompose from './molecules/CommentCompose';
import CommentList from './molecules/CommentList';

const Comments = (props) => {
  const data = props.data;

  if (!data.active) {
    return null;
  }

  return (
    <div className="comments__wrapper">
      <div className="comments__counter">{ data.active.comments.length } Comments</div>
      <CommentCompose data={ data }/>
      <div className="divider"></div>
      <CommentList data={ data } />
    </div>
  )
}

export default Comments;

