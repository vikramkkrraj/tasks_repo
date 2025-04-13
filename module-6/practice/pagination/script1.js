const posts = [
  {
    id: 1,
    name: "first post",
  },
  {
    id: 2,
    name: "second post",
  },
  {
    id: 3,
    name: "third post",
  },
  {
    id: 4,
    name: "fouth post",
  },
  {
    id: 5,
    name: "fifth post",
  },
  {
    id: 6,
    name: "sixth post",
  },
  {
    id: 7,
    name: "seventh post",
  },
  {
    id: 8,
    name: "eighth post",
  },
  {
    id: 9,
    name: "ninth post",
  },
  {
    id: 10,
    name: "tenth post",
  },
];

const App = () => {

 
  const [currentPage, setCurrentPage] = React.useState(1);
  const post = React.useRef(null)

  const limit = 2;
  const endIndex = currentPage * limit; // 2*2 = 4;
  const startIndex = endIndex - limit; // 4 -2 = 2

  const currentPosts = posts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(posts.length / limit);
 
  const addPost = () => {
    posts.push({ id : posts.length+1, name: post.current.value});
    post.current.value = "";
  }
  return (
    <div>
      <h1>Hello from react</h1>
      <div>
        <input type="text" ref={post} placeholder = "Enter the post" />
        <button onClick ={addPost}>add post</button>
      </div>
      <ul>
        {currentPosts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
      <button
        disabled={currentPage == 1}
        onClick={()=> setCurrentPage((prev) => prev - 1)}
      >
        prev
      </button>
      <button 
      onClick ={() => setCurrentPage((prev) => prev +1)}
      disabled ={currentPage == totalPages} >next</button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
