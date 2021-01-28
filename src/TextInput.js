import {useState} from 'react';


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
    
    <div className="button-inside">
      <input className="input-box"
        placeholder="Send a message"
        value={text}
        style={{color: "white"}}
        onChange={e=> setText(e.target.value)}
        onKeyPress={keyPressed}
      />
      
      <button className="send-button"
        onClick={sendMessage}
        disabled={!text}
      >
        {/* SEND */}
        {/* <i class='fas fa-arrow-up' style={{color: "black"}}></i> */}
        <i class='fas fa-arrow-circle-up' style={{color: "white"}}></i>

      </button>
    </div>

  </footer>

}

export default TextInput;