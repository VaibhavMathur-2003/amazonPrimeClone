
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Carousal from './Home/Carousal';
import Navbar from './Home/Navbar';
import Content from './Movie/Content';
import SmallCard from './Movie/SmallCard';
import Params from './Detail/Params';



function App() {
  
  return (
    <>
   <Router>
     <Navbar/>
     <Switch>
       <Route exact path="/">
        <Carousal/>
        <SmallCard/>
        <Content/>
       </Route>
       <Route exact path="/:pathname">
         <Params/>
       </Route>
     </Switch>
   </Router>
    </>
  );
}

export default App;
