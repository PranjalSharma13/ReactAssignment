

import React, {useState,useEffect} from 'react'
import Posts from '../Components/Posts';
import NewPost from '../Components/NewPost';
import ShowDetails from '../Components/ShowDetails';
import "../Container/DashBoard.css"
import API from '../Config/api';
import AddPost from "../Components/AddPost";




function DashBoard() {
  
    const [postsState, setPostsState] = useState(
        [
            { id: 1, title: "Anna Karenina", author: "Leo Tolstoy" },
            { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
            { id: 3, title: "The Great Gatsby", author: "F Scott Fitzgerald" }
        ]
    );
    const [selectedPost, setSelectedPost] = useState(null);
    const [newTitle, setNewTitle] = useState('');

    const handlePostClick = (post) => {
      setSelectedPost(post);
    };
    const handleAddPost = (newPost) => {
      setPostsState([...postsState, newPost]);
    };
    const handleUpdateName = (newName) => {
      if (selectedPost) {
        const updatedPosts = postsState.map(post =>
          post.id === selectedPost.id ? { ...post, title: newName } : post
        );
        postsState(updatedPosts);
      }
    };
    const handlePostDelete = () => {
      setSelectedPost(null);
  
      // Fetch updated posts after deletion
      API.get('posts')
        .then(response => {
          setPostsState(response.data);
        })
        .catch(err => console.log(err.message));
    };

    useEffect(() => {
      API.get('posts')
          .then(response => {
            setPostsState(response.data);
          })
          .catch(err => console.log(err.message));
  }, []);
  
    
  return (<div>
    <div>DashBoard</div>
    <div className="posts-container"> {postsState.map((post) => (
        <Posts key={post.id} post={post} onClick={() => handlePostClick(post)} />
      ))}
    </div>
    <NewPost onUpdateName={handleUpdateName}/>
    <AddPost onAddPost={handleAddPost} />
    <div>{selectedPost && <ShowDetails post={selectedPost} onDelete={handlePostDelete} />}</div>
    </div>
  )
}

export default DashBoard
