import './App.css'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div> 

      <Router>
       <Navbar />
      </Router> 
      
       </div>    
       );
}

export default App;
