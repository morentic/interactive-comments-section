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
  const iconUrl = new URL("./images/icon-reply.svg", import.meta.url).href;

  return (
    <>
      <div className="comment">
        <div className="col">
          <Vote count={comment.score}></Vote>
        </div>
        <div className="col">
          <div className="header">
            <img src={imgUrl} />
            <p>{comment.user.username}</p>
            <p>{comment.createdAt}</p>
            <button>
              <object data={iconUrl} type="image/svg+xml"></object>Reply
            </button>
          </div>
          <div className="content">
            <p>{comment.content}</p>
          </div>
        </div>
      </div>
      <div className="replies">
        {repliesElements && repliesElements.length > 0 && repliesElements}
      </div>
    </>
  );
}

export default Comment;
