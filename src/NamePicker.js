import { useState } from 'react';

function NamePicker() {
  const [showInput, setShowInput] = useState(false)
  const [username, setUsername] = useState('')

  if (showInput) {
    return <div className="name-picker">
      <input value={username}
        onChange={e=> setUsername(e.target.value)}
      />
      <button onClick={()=>setShowInput(false)}>
        OK
      </button>
    </div>
  }

  return <div className="name-picker">
    <div>{username}</div>

    {/* replace below with icon instead of butotn */}
    <button onClick={()=>setShowInput(true)}> 
        EDIT
    </button>
  </div>
}

export default NamePicker;