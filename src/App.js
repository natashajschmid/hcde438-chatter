import './App.css';
import {useState} from 'react';

import TextInput from './TextInput';
import Message from './Message';
import NamePicker from './NamePicker';


function App() {
  const [messages, setMessages] = useState([]);
  // const [username, setUsername] = useState('');

  console.log(messages);

  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        chatter
        <NamePicker />
      </header>

    <main className="messages">
      {messages.map((msg,i)=> {
        return <Message key={i} {...msg} />
      })}
    </main>

      <TextInput 
        send={(t)=> setMessages( [{text:t}, ...messages] )}
      />
    </div>
  );
}

export default App;
