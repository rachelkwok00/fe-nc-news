import React, { useEffect, useState, useContext } from 'react'
import { getUsername } from './Utils/apis';
import { UserContext } from '../Contexts/UserContext';
import Alert from 'react-bootstrap/Alert';

export default function SignIn() {


    const [alert, setAlert] = useState(false);
    const [err, setErr] = useState("");
    const [attemptSignIn, setAttemptSignIn] = useState(null);
    const {signInState , usernameState} = useContext(UserContext)
    const [signIn ,setSignIn] = signInState;
    const [username ,setUsername] = usernameState
    


    const checkUsername = (e) => {
        e.preventDefault();
        getUsername().then((response)=>{
            
            const isValidUsername = response.some((user)=>user.username === username)

        setSignIn(isValidUsername) 
        setAttemptSignIn(isValidUsername) 
        setAlert(true)
           })}

useEffect(()=>{
 if(username.length > 0){
   attemptSignIn ? null : setErr("Username is incorrect")}
   
},[attemptSignIn])
  
  return (
    <>
      <form onSubmit={checkUsername}>
        <label htmlFor="input-username">Username:</label>
        <input
          id="input-username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <button id="signin-button">Sign In</button>


        {alert && signIn ? (
          <Alert variant="success">
            <Alert.Heading>{`Signed in as ${username}`} </Alert.Heading>
          </Alert>
        ) : null}

        {alert && !signIn ? (
          <Alert variant="danger">
            <Alert.Heading>{err}</Alert.Heading>
          </Alert>
        ) : null}
      </form>
    </>
  );
}
