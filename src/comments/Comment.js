import { useState } from "react";
import CommentForm from "./CommentForm";
import unlike from "../image/unlike.svg";
import like from "../image/like.svg";
import dot from "../image/dot.svg";

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  const [likeCount, setLikeCount] = useState(comment.like);
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const candelete = currentUserId === comment.userId && replies.length === 0;

  const handleLike = () => {
    // Toggle likeCount between 0 and 1
    const newLike = likeCount == 0 ? 1 : 0;
    setLikeCount(newLike);
  };
  // if "const canReply = Boolean(currentUserId); then User can reply to all comments including users own comment

  const canReply = Boolean(currentUserId !== comment.userId);
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  return (
    <div key={comment.id} className="comment">
      <div className="comment-image-container">
        <img src={require(`../image/${comment.imgsrc}.png`)} />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
        </div>
        <div className="comment-text">{comment.body}</div>
        <div className="comment-actions">
          <div className="comment-action" onClick={() => handleLike()}>
            {likeCount > 0 ? <img src={like} /> : <img src={unlike} />}
          </div>
          <div className="comment-action">{likeCount}</div>

          <div className="comment-action">
            <img className="dot" src={dot} />
          </div>

          {canReply && (
            <div
              className="comment-action reply"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {candelete && (
            <div
              className="comment-action remove"
              onClick={() => deleteComment(comment.id)}
            >
              Remove
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
