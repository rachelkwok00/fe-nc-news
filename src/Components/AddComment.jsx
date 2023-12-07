import React, { useContext, useState } from 'react'
import { UserContext } from '../Contexts/UserContext';
import { postComment } from './Utils/apis';
import NewComment from './NewComment';
import "../../CSS/Comment.css"
import Alert from 'react-bootstrap/Alert';

export default function AddComment({article_id}) {
    const [newComment ,setNewComment] =  useState('');
    const [err ,setErr] =  useState('');
    const [newFullComment ,setNewFullComment] =  useState('');
    const {signInState , usernameState} = useContext(UserContext)
    const [signIn] = signInState;
    const [username] = usernameState

    const postingComment = (e) => {
   
        e.preventDefault();

        const commentObj = {
          body : newComment,
          username : username,
          }
 signIn ?  postComment(article_id , commentObj).then((response)=>{
            
          setNewFullComment(response.comment)
          setErr('Comment Posted') 
       

        }): setErr('Please Sign in to post Comment')}

  return (
    <>{newFullComment ? (<NewComment newFullComment={newFullComment}/> ):
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
{err ? <Alert variant="danger">
      <Alert.Heading>{err}</Alert.Heading>
    </Alert> : null}
 
        </form> </div>)}
    </>
  )
}