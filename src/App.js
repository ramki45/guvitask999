import './App.css';
import Profile from './components/Profile';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
     {user && <Route path="/" exact element={<Profile/>} />}
			 <Route path="/signup" exact element={<Register/>} />
		<Route path="/" exact element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
