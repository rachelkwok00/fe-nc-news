import Timestamp from 'react-timestamp';

export default function CommentCard(comment){

    return(
        <div className="comment-card">
     <div className="comment-background">
        <p>{comment.comment.body}</p> 
       </div> 
       <div className="comment-info">
        <h4>{comment.comment.author}</h4>
       <p> <Timestamp date={comment.comment.created_at} /></p>
    </div>
        </div>
    )
}
