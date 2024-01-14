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


  const handleDeleteComment = (commentID) => {
    commentID.toString();
    setAlertVariant("primary");
    setErr("Deleting Comment");
    return deleteComment(commentID)
      .then(() => {
        setAlertVariant("success");
        setDeletedComment(true);
        setErr("Message deleted");
        setShowAlert(true);
      })
      .catch((err) => {
        setAlertVariant("danger");
        setDeletedComment(false);
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
