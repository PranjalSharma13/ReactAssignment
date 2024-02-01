import React, {useState} from 'react'
import API from '../Config/api';

function AddPost({ onAddPost }) {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const handleAddPost = async () => {
        try {
          
          const response = await API.post('posts',{
            title,
            author,
            content,
          });
    
          const newPost = response.data;
          console.log(newPost);
    
          onAddPost(newPost);
            setTitle('');
          setAuthor('');
          setContent('');
        } catch (error) {
          console.error('Error adding post:', error);
        }
      };
    


  return (
    <div>
      <h2>Add New Post</h2>
      <label>Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /></label>
      <label>Author: <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} /></label>
      <label>Content: <textarea value={content} onChange={(e) => setContent(e.target.value)} /></label>
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  )
}

export default AddPost