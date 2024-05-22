import React, { useState } from 'react';
const Content = () => {


  const [name, setName] = useState('');
  const [isDarkText, setIsDarkText] = useState(false)


  const handleNameChange = (e) => {
    e.preventDefault()
    if (!name) return;
    console.log(name)
    setName(' ')

  }

  const handleToggleChange = (e) => {
    e.preventDefault()
    
  }

  return (
    <div className=" Content">
      <form onSubmit={handleToggleChange}>
        <textarea
          placeholder="Empty value"
          style={{
            backgroundColor: name,
            color: !isDarkText ? "#000" : "#FFF",
          }}
          value={name}
        />

        <br />

        <input
          type="text"
          autoFocus
          placeholder='enter color'
          onChange={(e) => {
            setName(e.target.value);

          }}

        />
        <br />

        <button
          type="submit"          
          onClick={() => setIsDarkText(!isDarkText)}
        >
          Toggle Color
        </button>
      </form>
    </div>
  )
}

export default Content
