import './comment.css'

const Comment = ({ username, time, comment, like }) => {
    return (
      <>
        <div className="user-comment_reply-container">
          <div className="username-container">
            <div className="username">{username}</div>
            <div className="time">{time}</div>
          </div>
          <div id="user-comment_reply">in reply to {username}</div>
          <div className="user-comment">
            <p>{comment}</p>
          </div>
          <div className="comment-interaction">
            <div className="like">
              Like
              <i className="fa fa-thumbs-up"></i>
              <div className="like-count">{like}</div>
            </div>
            <div className="reply">
              Reply <i className="fa fa-reply"></i>
            </div>
          </div>
        </div>
      </>
    );
  };

export default Comment