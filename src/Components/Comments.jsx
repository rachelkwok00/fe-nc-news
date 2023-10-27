import { useEffect, useState } from "react";
import { getCommentsById } from "./Utils/apis";
import { useParams } from "react-router-dom";
import Timestamp from 'react-timestamp';
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";


export default function SingleArticle(){

    const [loading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);
    const [comments, setComment] = useState([]);

    const {article_id} = useParams()

    useEffect(() => {
      getCommentsById(article_id)
      .then((response) => {
        setComment(response);
        setIsLoading(false);
      }).catch((err) =>{
        setErr({err})
      });
    }, []); 

    if (loading) return <p>Loading...</p>
    if(err) return <p>{err}</p>

    return(
        <section >
  <h2>Comments</h2> 

  <AddComment article_id={article_id}/>
  
  {comments.length === 0 ?(<p>No Comments</p>) :(
    
 comments.map((comment, index)=>{
    return (
        <div id="comments-container" key={index}>
            <CommentCard comment={comment}/>
        </div >
    )
})
  )}
        </section>
    )
}
