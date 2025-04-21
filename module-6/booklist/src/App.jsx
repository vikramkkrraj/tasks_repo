
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { BookDetails } from './pages/BookDetails';
import { ThemeContext } from './context/ThemeContext'; 
import { useContext,useEffect } from 'react';


function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme; // Add theme class to body
  }, [theme]);

  return (
    <>
      <BrowserRouter >
       <Navbar />
       <Routes >
          <Route path='/' element ={<Home />}></Route>
          <Route path='/book/:id' element ={<BookDetails />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
