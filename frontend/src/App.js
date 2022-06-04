import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Notice from './components/Notice';
import AdminHome from './components/AdminHome';

function App() {
  
  return (
    <BrowserRouter>
   <div className='container'>
    
   <Route path="/" exact component={Notice}></Route>
   <Route path="/home" exact component={AdminHome}></Route>
     </div> 
 </BrowserRouter>
  
  );
}

export default App;
