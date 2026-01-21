import { useEffect, useState } from "react";
import "./App4.css"; // Import the CSS file for styling

// App4 Component - Displays a list of posts from the API
function App4() {
  const [posts, setPosts] = useState([]); // Holds the list of posts

  // Fetch posts when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts</h1>

      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App4;
