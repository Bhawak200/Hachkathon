
import Carouselpart from './Components/Carouselpart'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/header'
import Footer from './Components/footer'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";

import About from './Components/About';


function App() {
  return (
     <Router>
     <div>
        <Header> </Header>
        <Carouselpart></Carouselpart>

        

        <About></About>
        <Footer></Footer>

     </div>
     </Router>
  );
}

export default App;
