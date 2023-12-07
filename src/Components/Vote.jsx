import React from 'react'
import { useState } from "react";
import { updateVote } from './Utils/apis';


export default function Vote({votes , article_id}) {
    const [votingDiff, setVotingDiff] = useState(0);

   
const updatingVote = (value) =>{
setVotingDiff((currentVote)=>{
    return currentVote + value
})
updateVote(article_id, value)
}

  return (
    <div id="button-voting-container">
      
    <button
    disabled={votingDiff ===
        -1}
    onClick={(()=>{
        updatingVote(-1)
    })}
    ><a>-</a></button>
    <p>{votes + votingDiff}</p>
    <button disabled={votingDiff ===
        1}
        onClick={(()=>{
        updatingVote(1)
    })}><a>+</a></button>
    </div>
  )
}
