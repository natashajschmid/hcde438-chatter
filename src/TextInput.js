import {useState} from 'react';

import { AiOutlineSend } from 'react-icons/ai';
import { GrSend } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import { IoLeafOutline } from 'react-icons/io';



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
      placeholder="Write your message here . . ."
      value={text}
      onChange={e=> setText(e.target.value)}
      onKeyPress={keyPressed}
    />
    <button className="send-button" onClick={sendMessage} disabled={!text}>
      {/* ↑ */}
      {/* SEND */}
      {/* <i class='fas fa-arrow-up' style={{color: "black"}}></i> */}
      {/* <i class='fas fa-arrow-circle-up' style={{color: "white"}}></i> */}
      <FiSend
        title="send" 
        style={{minWidth:'1rem', marginTop:2}} 
      />

    </button>
  </footer>

}

export default TextInput;