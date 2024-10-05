import { MouseEventHandler, useState } from "react";

function AddComment({
  handleClick,
}: {
  handleClick: (content: string) => MouseEventHandler | undefined;
}) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <img src="" alt="" />
      <textarea onChange={(e) => setInputValue(e.target.value)} />
      <button type="submit" onClick={() => handleClick(inputValue)}>
        Send
      </button>
    </>
  );
}

export default AddComment;
