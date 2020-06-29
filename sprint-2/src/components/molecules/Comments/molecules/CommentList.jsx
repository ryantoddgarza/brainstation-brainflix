import React from 'react';
import Comment from '../atoms/Comment';
import JSON from './commentsData';

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

export default CommentList;

