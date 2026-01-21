import { useEffect, useState } from "react";

// useState - Holds the list of posts (magic box)
// useEffect - Runs after the page appears to fetch posts from the API

function App4() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts</h1>

      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App4;
