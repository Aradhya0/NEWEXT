import './comment.css'
import Comment from './Comment'

// comment reply component
function CommentReply({ username, time, comment, like }) {
    return (
      <>
        <div className="user-comment_reply">
          <Comment
            username={username}
            time={time}
            comment={comment}
            like={like}
          />
        </div>
      </>
    );
  }

export default CommentReply