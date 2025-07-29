import React, { useState } from 'react';
import axios from 'axios';

function BlogForm({ onPostAdded }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/blogs', { title, body });
    setTitle('');
    setBody('');
    onPostAdded(); // refresh list after adding
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Blog Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <br />
      <button type="submit">Post</button>
    </form>
  );
}

export default BlogForm;
