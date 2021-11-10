import {useState , useEffect} from "react" ;
import {db} from "./firebase.config";
import {collection , getDocs} from "firebase/firestore";
import {Route , Routes} from "react-router-dom"
import NavBar from "./Models/NavBar";
import CreateCustomer from "./Views/CreateCustomer";
import Customers from "./Views/Customers";
//import Proposition from "./Views/Proposition";
import Calendar from "./Views/Calendar";
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
  <container>
  <NavBar />
      <Routes>
          <Route path ="takvim" element={<Calendar/>}/>
          <Route path ="yeni-musteri" element ={<CreateCustomer/>}/>
          <Route path ="musteriler" element={<Customers/>}/>
          <Route path ="ic-satis" element={<Customers/>}/>
          <Route path ="dis-satis" element={<Customers/>}/>
      </Routes>
   </container>
    
  );
}

export default App;
