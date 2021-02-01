import './App.css';
import {useState} from 'react';

import TextInput from './TextInput';
import Message from './Message';


function App() {
  const [messages, setMessages] = useState([]);

  console.log(messages);

  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        CHATTER
      </header>

    <main className="messages">
      {messages.map((m,i)=> {
        return <Message key={i} {...m} />
      })}
    </main>

      <TextInput 
        send={(t)=> setMessages( [{text:t}, ...messages] )}
      />
    </div>
  );
}

export default App;
