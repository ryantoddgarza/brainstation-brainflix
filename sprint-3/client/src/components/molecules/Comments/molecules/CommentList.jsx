import React from 'react';
import Comment from '../atoms/Comment';

const CommentList = (props) => {
  const data = props.data.active.comments;

  return (
    <section className="comment__list">
      {data.map((item, i) => {
        return (
          <Comment key={i}
                   channel={ data[i].name }
                   timestamp={ new Date(data[i].timestamp).toLocaleDateString('en-US') }
                   content={ data[i].comment }
          />
        )
      })}
    </section>
  )
}

export default CommentList;

