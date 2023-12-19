import { Button } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { deleteComment } from "./Utils/apis";
import Alert from "react-bootstrap/Alert";
import PropTypes from "prop-types";

export default function DeleteCommentButton({ commentID, setDeletedComment }) {
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState("");
  const [err, setErr] = useState(null);

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setShowAlert(false);
//     }, 3000);

//     return () => clearTimeout(timeoutId);
//   }, [showAlert]);


  const handleDeleteComment = (commentID) => { 
     commentID.toString();
  console.log(commentID, "COMMENTID HERE IN HANDLEDELETECOMMENT<<<");
    setAlertVariant("primary");
    // setShowAlert(true);
    console.log(showAlert,"1<<<<")
    setErr("Deleting Comment");
    return deleteComment(commentID)
      .then(() => {
        console.log("handle delete comment done");
        setAlertVariant("success");
        console.log(alertVariant,"should be success")
        setDeletedComment(true);
        console.log(deleteComment," should be true")
        setErr("Message deleted");
        console.log(err, " should not be null");
        setShowAlert(true);
         console.log(showAlert, "2<<<<");
      })
      .catch((err) => {
        console.log(err,"Error in handle delete comment")
        setAlertVariant("danger");
        // setDeletedComment(false);
        setErr("Message not deleted");
      });
  };

  return (
    <>
      <Button onClick={() => handleDeleteComment(commentID)}>Delete</Button>
      <Alert variant={alertVariant}>
        <Alert.Heading>{err}</Alert.Heading>
      </Alert>
    </>
  );
}
