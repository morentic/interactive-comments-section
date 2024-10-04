import Vote from "./Vote";
import "./Comment.css";

type Comment = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo?: string | null | undefined;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies?: Comment[];
};

function Comment(comment: Comment) {
  const repliesElements = comment.replies?.map((reply) => (
    <Comment key={reply.id} {...reply}></Comment>
  ));

  const imgUrl = new URL(comment.user.image.png, import.meta.url).href;

  return (
    <div className="comment">
      <div className="content">
        <img src={imgUrl} />
        <Vote count={comment.score}></Vote>
        <p>{comment.content}</p>
      </div>

      <div className="replies">
        {repliesElements && repliesElements.length > 0 && repliesElements}
      </div>
    </div>
  );
}

export default Comment;
