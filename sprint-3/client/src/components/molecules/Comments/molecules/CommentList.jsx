import React from 'react';
import Comment from '../atoms/Comment';

// dynamic timestamp
const timeSincePost = (test) => {
  const diff = (Date.now() - test) / 1000;

  switch (true) {
    // new submission
    case test === 'now':
      return 'now';

    // less than one minute
    case diff < 60:
      return `${ Math.floor(diff) }s ago`;

    // hours ago
    case diff >= 60 && diff < 3600:
      return `${ Math.floor((diff)/60) }m ago`;

    // days ago
    case diff >= 3600 && diff < 86400:
      return `${ Math.floor(diff/3600) }h ago`;

    // weeks ago
    case diff >= 86400 && diff < 604800:
      return `${ Math.floor(diff/86400) }w ago`;

    // months ago
    case diff >= 604800 && diff < 31556952:
      return `${ Math.floor(diff/604800) }m ago`;

    // years ago
    case diff >= 31556952:
      return `${ Math.floor(diff/31556952) }y ago`;

    default:
      return '';
  };
};

const CommentList = (props) => {
  const data = props.data.active.comments;

  return (
    <section className="comment__list">
      {data.map((item, i) => {
        return (
          <Comment key={ i }
                   channel={ data[i].name }
                   timestamp={ timeSincePost(data[i].timestamp) }
                   content={ data[i].comment }
          />
        );
      })};
    </section>
  );
};

export default CommentList;

