import React, { memo } from 'react';

const Comment = memo(({ comment }) => {
  return (
    <div>
      <h5 key={comment.id}>{comment.name}</h5>
    </div>
  );
});

export default Comment;
