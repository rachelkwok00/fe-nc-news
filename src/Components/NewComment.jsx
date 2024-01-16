import React from 'react'
import Timestamp from 'react-timestamp';

export default function NewComment({newFullComment}) {

  return (
    <div className="new-comment-card">
      <div className='new-comment-body'>
    {newFullComment.body}
    </div>
    <div className='new-comment-info'>
    {newFullComment.author}
    <Timestamp date={newFullComment.created_at} />
    </div>
    </div>
  )
}
