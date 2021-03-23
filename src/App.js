import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Help from "./components/Help/Help";
import Information from "./components/Information/Information";
import Login from "./components/Login/Login";
import LogoPart from "./components/LogoPart/LogoPart"
import Return from "./components/Return/Return";
import Story from "./components/Story/Story";

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path='/story'>
          <Story></Story>
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>

          <Route exact path='/help'>
           <Help></Help>
          </Route>

          <Route exact path='/return'>
           <Return></Return>
          </Route>


          <Route path=''>
            <Header></Header>
            <LogoPart></LogoPart>
            <Information></Information>
            <About></About>
            <Footer></Footer>
            </Route>
            
         
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
