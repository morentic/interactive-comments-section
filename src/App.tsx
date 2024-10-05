import Comment from "./Comment";
import data from "../data.json";
import "./App.css";
import AddComment from "./AddComment";
import { useState } from "react";
import { UserContext } from "./UserContext";

function App() {
  const [commentItems, setCommentItems] = useState(
    data.comments.map((comment) => <Comment {...comment}></Comment>)
  );

  const currentUser = data.currentUser;

  const handleClick = (content: string): undefined => {
    console.log(content);

    const newComment: Comment = {
      id: 1,
      content: content,
      createdAt: "today",
      score: 0,
      user: currentUser,
      replies: [],
    };

    setCommentItems([...commentItems, <Comment {...newComment} />]);
  };

  return (
    <>
      <UserContext.Provider value={currentUser}>
        <div className="container">
          {commentItems}
          <AddComment handleClick={handleClick} />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
