import React from 'react'
import Timestamp from 'react-timestamp';

export default function NewComment({newFullComment}) {
 console.log(newFullComment,"new ful comment in newcomment <<<<<<<")
  return (
    <div id="new-comment-container">
    {newFullComment.author}
    <br></br>
    {newFullComment.body}
    <br></br>
    <Timestamp date={newFullComment.created_at} />
    <br></br>
    </div>
  )
}
