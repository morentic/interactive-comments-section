import Comment from "./Comment";
import data from "../data.json";
import "./App.css";
import AddComment from "./AddComment";
import { useState } from "react";

function App() {
  const [commentItems, setCommentItems] = useState(
    data.comments.map((comment) => <Comment {...comment}></Comment>)
  );

  const handleClick = (content: string): undefined => {
    console.log(content);

    const newComment: Comment = {
      id: 1,
      content: content,
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      replies: [],
    };

    setCommentItems([...commentItems, <Comment {...newComment} />]);
  };

  return (
    <>
      <div className="container">
        {commentItems}
        <AddComment handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
