import './App.css';
import React, { useState, useEffect } from 'react';
import {  Button,FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import db from './Firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';


function App() {

  const [input, setInput] = useState('');
  const [messages , setMessages] = useState([]);
  const [username, setusernmae] = useState('');

  useEffect(() => {
    setusernmae(prompt('Please enter your name'));
  },[])

  
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id,  message :doc.data()})))
    })
  }, [])

console.log(messages);

  const sentMessage = (event) => {
    //all logic for dispplay the message hear 
    event.preventDefault();
    db.collection('messages').add({
      message : input,
      username : username,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log(messages);
    //setMessages([...messages,{username :username, text: input}]);
    setInput('');
  }

  return (
    <div className="App">
     <img src="https://www.freepnglogos.com/uploads/facebook-messenger-png/file-facebook-messenger-logo-svg-17.png" width="100"  />
     <h1>Facebook Messenger App Clone</h1>
    <form className="app__form">
    <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter the message" value={input} onChange={event => setInput(event.target.value)}></Input >
          <IconButton className="app__iconButton" type="submit" disabled={!input} variant="contained" color="primary" onClick={sentMessage}>
          <SendIcon>
          </SendIcon>
          </IconButton>
        </FormControl>
    </form>
     
     <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message} />
        ))
      }
     </FlipMove>
     
    </div>
  );
}

export default App;
