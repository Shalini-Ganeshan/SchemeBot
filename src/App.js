import './App.css';
import HomePage from './Homepage';
import './index.css';
import Login from './Login';
import Contactus from './Contactus'
import Signup from './Signup';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Phonesignup from './Phonesignup';

function App() {
  return (
    <UserAuthContextProvider>
      <Router> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/phonesignup" element={<Phonesignup />} />
        </Routes>
      </Router>
    </UserAuthContextProvider>
  );
}

export default App;

