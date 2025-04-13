
const App = () => {
    const [page, setPage] = React.useState(1);
    const [posts, setPosts] = React.useState([]);
    const postsPerPage = 5;

    const fetchData = async () => {
        try {
            const resp = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
            const result  = await resp.json();
            setPosts(result);

        } catch (error) {
            console.log(error)
        }
    }
    React.useEffect(() => { fetchData()},[page]);
    return(
        <div>
            <h1>hello from react</h1>
            <h2>Posts (Page  {page})</h2>
            <ul>
                {
                    posts.map((post) => (
                        <li key={post.id} > {post.title}</li>
                    ))
                }
            </ul>
            <button onClick ={() => setPage(prev => prev -1)} disabled = {page ==1} >prev</button>
            <button onClick={() => setPage(prev => prev + 1)}>next</button>

        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)