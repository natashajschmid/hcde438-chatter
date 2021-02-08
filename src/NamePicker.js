import { useState } from 'react';

import { FiEdit } from 'react-icons/fi';
import { FiEdit2 } from 'react-icons/fi';
import { FiCheck } from 'react-icons/fi';


function NamePicker(props) {
  const [editName, setEditName] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  function save() {
    props.saveName(username);
    setEditName(false);
    localStorage.setItem('username', username);
  }

  function keyPressed(e) {
    if (e.key === 'Enter') {
      setEditName(false);
      console.log(username);
      save();
    }
  }

  if (editName) {
    return (
      <div className="name-picker">
        <input className="name-input" 
          value={username}
          onChange={e=> setUsername(e.target.value)}
          onKeyPress={keyPressed}
        />
        <FiCheck
        className="name-icon name-ok"
        // onClick={()=>setEditName(false)}
        onClick={save}
        title="new message" 
        style={{fontSize: '1.3rem'}} 
        />
      </div>
    );
  }

  return <div className="name-picker">
    <div>{username}</div>
    <FiEdit2
      className="name-icon name-edit"
      onClick={()=>setEditName(true)}
      title="new message" 
      style={{fontSize: '1rem', marginTop: '2px'}} 
    />
  </div>
}

export default NamePicker;