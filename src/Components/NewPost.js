import React, { useRef } from 'react';

function NewPost({ onUpdateName }) {
  const inputRef = useRef(null);

  const handleChangeName = () => {
    const newName = inputRef.current.value;
    onUpdateName(newName);
    inputRef.current.value = ''; 
  };

  return (
    <div>
      NewPost
      <input
        type="text"
        ref={inputRef}
        placeholder="New Name"
      />
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
}

export default NewPost;
