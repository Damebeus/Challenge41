import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Welcome from "./components/Welcome/Welcome.jsx";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/home' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
