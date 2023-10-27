import React, { useContext, useState } from 'react'
import { UserContext } from '../Contexts/UserContext';
import { postComment } from './Utils/apis';
import NewComment from './NewComment';

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
            console.log(response.comment,"response AFTER POST")
          setNewFullComment(response.comment)
          setErr('Comment Posted') 
       

        }): setErr('Please Sign in to post Comment')}

  return (
    <>{newFullComment ? (<NewComment newFullComment={newFullComment}/> ):
       ( <><p>AddComment</p>
        <div>{newFullComment}</div>
        <form onSubmit={postingComment}>
        <label htmlFor='input-comment'>Add comment:</label>
    <input 
    id="input-comment"
    onChange={(e) => {
        setNewComment(e.target.value);
        
      }}
      value={newComment}/>
    <button>Post Comment</button>
    {err}
        </form> </>)}
    </>
  )
}
