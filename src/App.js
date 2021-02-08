import {useState} from 'react';
import './App.css';
import { db, useDB } from './db';

import TextInput from './TextInput';
import Message from './Message';
import NamePicker from './NamePicker';


function App() {
  const messages = useDB();
  // const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  console.log(messages);

  return (
    <div className="App">
      <header className="header">
        <div className="header-group">
          <div className="logo" />
          <div className="header-text">chatter</div>
        </div>
        <NamePicker saveName= {setUsername} />
      </header>

    <main className="messages">
      {messages.map((msg,i)=> {
        const isMe = msg.name===username;
        return <Message key={i} {...msg} isMe={isMe} />
      })}
    </main>

      <TextInput 
        // send={(t)=> setMessages([{text:t, name:username, date:new Date()}, ...messages])}
        send={(t)=> db.send({text:t, name:username, date:new Date()})}
      />
    </div>
  );
}

export default App;
