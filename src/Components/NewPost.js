import React ,{useState} from 'react'

function NewPost({ onUpdateName }) {
  const [newName, setNewName] = useState('');
  const handleChangeName = () => {
    onUpdateName(newName);
    setNewName('');
  };
  return (
    
    <div>NewPost
        <input type="text" value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="New Name"/>
        <button onClick={handleChangeName}>Change Name </button>
    </div>
   
 
  )
}

export default NewPost