import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Registration from './Component/Registration';
import EditUser from './Component/EditUser';
import { Provider } from 'react-redux';
import store from './redux/Store';
function App() {
  return (
    <Provider store={store}>

    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/about" Component={About}/>
          <Route path="/registration" Component={Registration}/>
          <Route path="/edit-user/:id" Component={EditUser}/>
        </Routes>
    </Router>
      
    </div>
    </Provider>
  );
}

export default App;
