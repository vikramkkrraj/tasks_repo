
const App = () => {
    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [search , setSearch] = React.useState('');

    const findValue = React.useRef(null);


    const handerSubmit = (e)=>{
        e.preventDefault();
        const obj = {name, email, password};
        console.log(obj);
    }
    const searchHandler = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value);
    }

    const useRefHandler = ()=> {
        console.log(findValue.current.value)
    }
    return (

        <div>
            <h1>hello from react</h1>
            <form  onSubmit={handerSubmit}>
                <div>
                    <input type="text"
                     value = {name} 
                     onChange = {(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <input type="email"
                     value = {email}
                     onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <input type="password"
                     value = {password}
                     onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">add</button>
            </form>
            <div>
                <input type="text"
                value={search} 
                onChange={searchHandler} />
            </div>

            <div>
                <input type="text"
                ref = {findValue} 
                 placeholder ="use ref" />
                <button onClick={ useRefHandler}> useRef Add</button>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)