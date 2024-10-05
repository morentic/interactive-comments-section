import { MouseEventHandler, useContext, useState } from "react";
import "./AddComment.css";
import { UserContext } from "./UserContext";

function AddComment({
  handleClick,
}: {
  handleClick: (content: string) => MouseEventHandler | undefined;
}) {
  const [inputValue, setInputValue] = useState("");
  const currentUser = useContext(UserContext);
  if (!currentUser) {
    return (
      <>
        <p>User not found</p>
      </>
    );
  }

  const userImageUrl = new URL(currentUser.image.png, import.meta.url).href;

  const handleAddComment = () => {
    setInputValue("");
    handleClick(inputValue);
  };

  return (
    <>
      <div className="comment-new">
        <img src={userImageUrl} alt="" />
        <textarea
          value={inputValue}
          rows={3}
          placeholder="Add a comment..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" onClick={handleAddComment}>
          Send
        </button>
      </div>
    </>
  );
}

export default AddComment;
