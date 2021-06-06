import './css/main.css';
import { BusinessSearchResults, Login, Signup, ForgotPassword, Home, Business, Error404} from './screens/Screens.tsx';
import { Footer } from './components/navigations/Footer';
import { Navbar } from './components/navigations/Navbar';
import {Redirect, Route, Switch} from 'react-router-dom';


function App() {
  // const location = useLocation(); 
  // console.log(location);
  return (
    
    <div className="App">
      <header className="App-header">
        
      </header>
      <div className='content'>
      <Navbar />
        <Switch>
            
            <Route path='/signin' render={()=> <Login /> } /> 
            <Route path='/signup' render={()=><Signup /> } /> 
            <Route path='/forgotpassword' render={()=><ForgotPassword /> } /> 

          {/* <div> */}
            
            <Route path='/business-search' render={()=> <BusinessSearchResults />}/>  
            <Route path='/business' render={()=> <Business />}/>  
            <Route path='/' exact render={()=> <Home />}/>
            <Route path='/not-found' exact render={()=> <Error404 />}/>
            <Redirect to='/not-found'  />

          {/* </div>  */}

          
        </Switch>

      </div>

      <Footer />    
    </div>
  );
}

export default App;
