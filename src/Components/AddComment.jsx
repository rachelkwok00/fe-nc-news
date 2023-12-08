import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Contexts/UserContext';
import { deleteComment, postComment } from './Utils/apis';
import NewComment from './NewComment';
import "../../CSS/Comment.css"
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';
import DeleteCommentButton from './DeleteCommentButton';


export default function AddComment({article_id}) {

    const [newComment ,setNewComment] =  useState('');
    const [err ,setErr] =  useState('');
    const [newFullComment ,setNewFullComment] =  useState('');
    const {signInState , usernameState} = useContext(UserContext)
    const [signIn] = signInState;
    const [username] = usernameState
    const [deletedComment ,setDeletedComment] =  useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertVariant, setAlertVariant] = useState("");

    useEffect(() => {

      const timeoutId = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
  
      return () => clearTimeout(timeoutId);

    }, [showAlert]);

    const postingComment = (e) => {
        e.preventDefault();
        
        console.log("signIn:", signIn);

        if (!signIn) {
          console.log("IN HEREERE<<<<<")
          setAlertVariant("danger");
          setErr('Sign in to post comment');
          setShowAlert(true);
          return;
      }
      
        // if(signIn){ 
        //   setErr('Comment Posting') 
        //   setAlertVariant("primary")
        //     setShowAlert(true)
        // }
       
        console.log("Posting a comment...");

        setErr('Comment Posting') 
          setAlertVariant("primary")
            setShowAlert(true)

        const commentObj = {
          body : newComment,
          username : username,
          }

 signIn ?  postComment(article_id , commentObj).then((response)=> {
  console.log(response,"<<<Full comment")
          setNewFullComment(response.comment)
          setAlertVariant("success")
          setErr('Comment Posted') 
          setShowAlert(true)
        }).catch(err => {
        setErr("Error posting comment");
      }).finally(() => {
        showAlert(true);
      }): 
        console.log("I AM HERE INSTEAD")
        setAlertVariant("danger")
        setErr('Sign in to post comment') 
        setShowAlert(true)}

const handleDeleteComment = (commentID) => {
  setAlertVariant("primary")
  setShowAlert(true)
setErr("Deleting Comment")
  return deleteComment(commentID)
  .then(()=>{
    console.log("handle delete comment done")
    setAlertVariant("success")
    setDeletedComment(true)
    setNewFullComment("")
    setErr("Message deleted")  
    setShowAlert(true)
  }).catch((err)=>{
    setAlertVariant("danger")
    setDeletedComment(false)
    setErr("Message not deleted") 
  })
}

  return (
    <>{newFullComment? (<><NewComment 
    newFullComment={newFullComment}/> 
    <Button onClick ={() => handleDeleteComment(newFullComment.comment_id)} > Delete </Button> 
    {err && showAlert ? <Alert variant={alertVariant} >
      <Alert.Heading>{err}</Alert.Heading>
    </Alert> : null}
    <DeleteCommentButton commentID={newFullComment.comment_id}/>
    </>):
       ( <div className="new-comment-container">
        <div>{newFullComment}</div>
        <form onSubmit={postingComment}>
    
    <input 
    id="input-comment"
    type="text"
    onChange={(e) => {
        setNewComment(e.target.value);
        
      }}
      value={newComment}/>
    <button>Post Comment</button>
<br></br>
{err && showAlert ? <Alert variant={alertVariant}>
      <Alert.Heading>{err}</Alert.Heading>
    </Alert> : null}
 
        </form> </div>)}
    </>

  )
}
