import './App.css'
import {
  BrowserRouter as Router,
  // Route,
  // Switch,
} from 'react-router-dom'
import Navbar from './Components/Navbar'
// import Home from './Components/Home'
// import About from './Components/About'
// import Project from './Components/Project'
// import Skills from './Components/Skills'
// import Contact from './Components/Contact'




function App() {
  return (
   
    <div> 
      <Router>
       <Navbar />
       

     
      {/*   <Router>
    
 <Navbar />
 <Switch>
                
            <Route path="/" component={Home}/>
   <Route path="/about" component={About}/>
   <Route path="/project" component={Project}/>
 <Route path="/skills" component={Skills}/>
   <Route path="/contact" component={Contact}/>

      </Switch>*/}
      </Router> 
       </div>    
       );
}

export default App;
