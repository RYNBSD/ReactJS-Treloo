import { CommentsCard } from "../components";
import { comments } from "../data";
import "./css/Comments.css";

export default function Comments() {
  return (
    <div className="comments">
      <div className="container f-center">
        {comments.map((comment) => (
          <CommentsCard key={comment.author} {...comment} />
        ))}
      </div>
    </div>
  );
}
