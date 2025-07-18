import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const LikeButton = () => {
  const [liked , setLiked] = React.useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <div style={{ fontSize: 18 }} onClick={handleLike} className="like-button">
      {liked ? <FaThumbsUp style={{ color: 'blue', marginRight: 8 }} /> : <FaThumbsUp style={{ marginRight: 8 }} />}
      {liked ? 'Liked!' : 'Click like if this post is useful to you !'}
    
    </div>
  );
};

export default LikeButton;
