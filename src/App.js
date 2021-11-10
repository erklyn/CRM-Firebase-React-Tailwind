import {useState , useEffect} from "react" ;
import {db} from "./firebase.config";
import {collection , getDocs} from "firebase/firestore";
import {BrowserRouter as Router ,Route , Routes} from "react-router-dom"
import NavBar from "./Models/NavBar";
import Customer from "./Views/Customer"
import CreateCustomer from "./Views/CreateCustomer"
import Customers from "./Views/Customers"
import Proposition from "./Views/Proposition"
import Calendar from "./Views/Calendar"
import './App.css';




function App() {
    const [customers , setCustomer] = useState([]);

    
    useEffect(() => {
        const getCustomers = async () => {
          const data = await getDocs(collection(db, "customers"));
          setCustomer(data.docs.map((doc) => ({...doc.data(), id: doc.id})));  
        };


        getCustomers();
    }, []);


  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path ="takvim" element={<Calendar/>}/>
          <Route path ="musteriler" element={<Customers/>}/>
      </Routes>
      {customers.map((customer) => {
        return <div>
            {customer.companyRep}
        </div>
      })}
    </div>
  );
}

export default App;
