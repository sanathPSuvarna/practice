import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BlogList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:5000/blogs');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>All Blog Posts</h2>
      {posts.map((post) => (
        <div key={post._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <small>{new Date(post.date).toLocaleString()}</small>
            <hr />
            <button onClick={async () => {
                await axios.delete(`http://localhost:5000/blogs/${post._id}`);
                fetchPosts(); // refresh list after deletion
                }
            }>Delete</button>
            <button onClick={async () => {
                const updatedTitle = prompt("Update Title", post.title);
                const updatedBody = prompt("Update Body", post.body);
                if (updatedTitle && updatedBody) {
                    await axios.put(`http://localhost:5000/blogs/${post._id}`, { title: updatedTitle, body: updatedBody });
                    fetchPosts(); // refresh list after update
                }
            }
            }>Update</button>
        <hr />
        </div>
      ))}
    </div>
  );
}

export default BlogList;
