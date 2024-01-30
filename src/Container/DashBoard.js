

import {useState} from 'react'
import Posts from '../Components/Posts';
import NewPost from '../Components/NewPost';
import ShowDetails from '../Components/ShowDetails';
import "../Container/DashBoard.css"


function DashBoard() {

    const [postsState, setPostsState] = useState(
        [
            { id: 1, name: "Anna Karenina", author: "Leo Tolstoy" },
            { id: 2, name: "To Kill a Mockingbird", author: "Harper Lee" },
            { id: 3, name: "The Great Gatsby", author: "F Scott Fitzgerald" }
        ]
    );
    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostClick = (post) => {
      setSelectedPost(post);
    };
    
  return (<div>
    <div>DashBoard</div>
    <div className="posts-container"> {postsState.map((post) => (
        <Posts key={post.id} post={post} onClick={() => handlePostClick(post)} />
      ))}
    </div>
    <NewPost/>
    <div>{selectedPost && <ShowDetails post={selectedPost} />}</div>
    </div>
  )
}

export default DashBoard
