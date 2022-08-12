import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailsFav from "./components/DetailsFav/DetailsFav";
import Home from "./components/Home/Home";
import Searchpage from "./components/Searchpage/Searchpage";
import Welcome from "./components/Welcome/Welcome.jsx";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/añadir' component={Searchpage} />
          <Route exact path='/favoritos' component={DetailsFav} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
