import { BrowserRouter,Routes , Route} from "react-router-dom"
import { Home } from "./pages/Home"
import { AddRental } from "./pages/AddRental"
import { EditRentalPage } from "./pages/EditRentalPage"
import { SummaryPage } from "./pages/SummaryPage"
import { RentalForm } from "./components/RentalForm"

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/rent" element ={<AddRental />} />
        <Route path="/edit/:id" element ={<RentalForm />} />
        <Route path="/summary" element ={<SummaryPage />} />


      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
