import { useState, useEffect } from 'react';
import BlogPosts from './components/BlogPosts';
import NewPost from './components/NewPost';

function App() {
  
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(function () {
    async function loadPosts() {
      const response = await fetch (
        'https://jsonplaceholder.typicode.com/posts'
       
      );

      const BlogPosts = await response.json();
      setLoadedPosts(BlogPosts)
    }

    loadPosts();
  }, []);

  return (
    <>
      <NewPost />
      <BlogPosts />
    </>
  );
}

export default App;
