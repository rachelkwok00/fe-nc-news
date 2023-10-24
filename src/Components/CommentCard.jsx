import Timestamp from 'react-timestamp';

export default function CommentCard(comment){

    return(
        <>
      <h4>{comment.comment.author}</h4>
        <p>{comment.comment.body}</p>
       <p> <Timestamp date={comment.comment.created_at} /></p>
    
        </>
    )
}
