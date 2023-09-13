import { useState } from "react";
import send from "../image/send.svg";

const CommentForm = ({
  handleSubmit,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="comment-form-submit-field">
        <textarea
          placeholder="Write your comment"
          className="comment-form-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="comment-form-button" disabled={isTextareaDisabled}>
          <img src={send} />
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
