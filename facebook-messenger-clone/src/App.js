import './App.css';
import React, { useState, useEffect } from 'react';
import {  Button,FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import db from './Firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';


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
     <h1>Hello welcome to facebook messenger app clone</h1>
    <form>
    <FormControl>
          <InputLabel htmlFor="my-input">Enter the message</InputLabel>
          <Input  value={input} onChange={event => setInput(event.target.value)}></Input >
          <Button type="submit" disabled={!input} variant="contained" color="primary" onClick={sentMessage}>Send Message</Button>
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
