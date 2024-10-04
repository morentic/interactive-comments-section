import Comment from "./Comment";
import data from "../data.json";
import "./App.css";

function App() {
  const commentItems = data.comments.map((comment) => (
    <Comment {...comment}></Comment>
  ));

  return (
    <>
      <div className="container">{commentItems}</div>
    </>
  );
}

export default App;
