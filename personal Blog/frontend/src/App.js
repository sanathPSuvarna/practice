import React, { useState } from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handlePostAdded = () => {
    setRefresh(!refresh); // toggle to refresh list
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>📝 Personal Blog</h1>
      <BlogForm onPostAdded={handlePostAdded} />
      <hr />
      <BlogList key={refresh} />
    </div>
  );
}

export default App;
