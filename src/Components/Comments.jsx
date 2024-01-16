import { useEffect, useState , useContext} from "react";
import { getCommentsById } from "./Utils/apis";
import { useParams } from "react-router-dom";
import Timestamp from 'react-timestamp';
import AddComment from "./AddComment";
import DeleteCommentButton from "./DeleteCommentButton";

import { UserContext } from "../Contexts/UserContext";

export default function SingleArticle(){

    const { signInState, usernameState } = useContext(UserContext);
    const [signIn] = signInState;
    const [username] = usernameState;

  const [loading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [comments, setComment] = useState([]);
  const [deletedComment, setDeletedComment] = useState(false);

  const { article_id } = useParams();

  useEffect(() => {
    getCommentsById(article_id)
      .then((response) => {
        const sortComments = [...response.sort((a,b)=>{
          return b.created_at.localeCompare(a.created_at);
        })]
        setComment(sortComments);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr({ err });
      });
  }, [deletedComment]);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>{err}</p>;

  return (
    <section>
      <h2>Comments</h2>

      <AddComment article_id={article_id} />

      {comments.length === 0 ? (
        <p>No Comments</p>
      ) : (
        comments.map((comment, index) => {
          return (
            <div id="comments-container" key={index}>
              <div className="comment-card">
                <div className="comment-background">
                  <p>{comment.body}</p>
                 

                  <div className="comment-info">
                  <h4>{comment.author}</h4>
                  <a>
                    {" "}
                    <Timestamp date={comment.created_at} />
                  </a>
                </div>
                </div>
                
                 {signIn && username === comment.author ? (
                    <DeleteCommentButton
                      commentID={comment.comment_id}
                      setDeletedComment={setDeletedComment}
                    />
                  ) : null}
              </div>
            </div>
          );
        })
      )}
    </section>
  );
}
