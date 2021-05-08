
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

function App() {
  return (
     <Router>
     <div>
        <Header> </Header>
        <Carouselpart></Carouselpart>
        <Footer></Footer>
     </div>
     </Router>
  );
}

export default App;
