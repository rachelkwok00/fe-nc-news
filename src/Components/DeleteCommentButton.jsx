import { Button } from "react-bootstrap"
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Contexts/UserContext';
import { deleteComment, postComment } from './Utils/apis';
import Alert from 'react-bootstrap/Alert';

export default function DeleteCommentButton({commentID , setDeletedComment}) {

   
    const [showAlert, setShowAlert] = useState(false);
    const [alertVariant, setAlertVariant] = useState("");

    useEffect(() => {

        const timeoutId = setTimeout(() => {
          setShowAlert(false);
        }, 3000);
    
        return () => clearTimeout(timeoutId);
  
      }, [showAlert]);

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
    <>
    {/* <Button onClick ={() => handleDeleteComment(newFullComment.comment_id)}>Delete</Button>
    {!deletedComment ? } */}
    </>
  )
}