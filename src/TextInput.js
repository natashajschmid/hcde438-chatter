import {useState} from 'react';
import { AiOutlineSend } from "react-icons/ai";
import { GrSend } from "react-icons/gr";



function TextInput(props) {
  const [text, setText] = useState('');

  function sendMessage() {
    if (text === '') return;  // skip the function
    props.send(text)
    setText('')
  }

  function keyPressed(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }

  return <footer className="text-input">
    <input className="input"
      placeholder="Send a message"
      value={text}
      onChange={e=> setText(e.target.value)}
      onKeyPress={keyPressed}
    />
    <button onClick={sendMessage} disabled={!text} className="send-button">
      {/* ↑ */}
      {/* SEND */}
      {/* <i class='fas fa-arrow-up' style={{color: "black"}}></i> */}
      {/* <i class='fas fa-arrow-circle-up' style={{color: "white"}}></i> */}
      <AiOutlineSend 
        title="send" 
        style={{minWidth:'0.7rem', marginLeft:2}} 
      />

    </button>
  </footer>

}

export default TextInput;