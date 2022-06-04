import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Notice from './components/Notice';
import AdminHome from './components/AdminHome';
import addpanel from './components/Addpanel';
import addform from './components/Addform';
import edit from './components/Edit';
import Addpanelmember from './components/Addpanelmember';
import Viewpanelmember from './components/Viewpanelmember';

function App() {
  
  return (
    <BrowserRouter>
   <div className='container'>
    
   <Route path="/" exact component={Notice}></Route>
   <Route path="/home" exact component={AdminHome}></Route>
   <Route path="/addpanel" exact component={addpanel}></Route>
   <Route path="/addform" exact component={addform}></Route>
   <Route path="/edit" exact component={edit}></Route>
   <Route path="/addpanelmember" exact component={Addpanelmember}></Route>
   <Route path="/viewpanel" exact component={Viewpanelmember}></Route>
     </div> 
 </BrowserRouter>
  
  );
}

export default App;
