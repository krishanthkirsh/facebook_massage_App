import './App.css';
import React, { useState, useEffect } from 'react';
import {  Button,FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';


function App() {

  const [input, setInput] = useState('');
  const [messages , setMessages] = useState([{username :'krish', text :'hello'},
  {username :'Ram kumar', text :'yoo bro'}]);
  const [username, setusernmae] = useState('');

  useEffect(() => {
    setusernmae(prompt('Please enter your name'));
  },[])

  console.log(username);


  const sentMessage = (event) => {
    //all logic for dispplay the message hear 
    event.preventDefault();
    setMessages([...messages,{username :username, text: input}]);
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
     
     {
       messages.map(message => (
         <Message username={username} message={message} />
       ))
     }
    </div>
  );
}

export default App;
