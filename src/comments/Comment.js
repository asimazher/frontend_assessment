import CommentForm from "./CommentForm";
let image = require.context('../image', true);


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
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const canDelete =
    currentUserId === comment.userId && replies.length === 0;
  const canReply = Boolean(currentUserId);
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  return (
    <div key={comment.id} className="comment">
      <div className="comment-image-container">
      <img src={require(`../image/${comment.imgsrc}.png`)}/>
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
        </div>
        <div className="comment-text">{comment.body}</div>
        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment.id)}
            >
              Delete
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
