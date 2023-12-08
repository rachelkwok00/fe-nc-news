import Timestamp from 'react-timestamp';
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Contexts/UserContext';
import { Button } from 'react-bootstrap';
import DeleteCommentButton from './DeleteCommentButton';

export default function CommentCard(comment){

    const {signInState , usernameState} = useContext(UserContext)
    const [signIn] = signInState;
    const [username] = usernameState
    const [deletedComment ,setDeletedComment] =  useState(false);

    return(
        <div className="comment-card">
     <div className="comment-background">

       { signIn && username === comment.comment.author ? 
        <DeleteCommentButton commentID = {comment.comment.comment_id} setDeletedComment={setDeletedComment}/> : null }
    
        <p>{comment.comment.body}</p> 
       </div> 
       <div className="comment-info">
        <h4>{comment.comment.author}</h4>
       <p> <Timestamp date={comment.comment.created_at} /></p>
    </div>
        </div>
    )
}
