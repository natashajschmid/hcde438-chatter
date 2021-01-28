import './App.css';
import {useState} from 'react';

import TextInput from './TextInput';


function App() {
  const [messages, setMessages] = useState([{text: 'Send a message'}]);

  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        CHATTER
      </header>

      <div className="message">
        {messages[0].text}
      </div>

      <TextInput 
        send={t=> setMessages([{text:t}])}
      />

    </div>
  );
}

export default App;
