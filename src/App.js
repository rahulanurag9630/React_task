import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
      
      <div className="App">
        
      <Router>
        <h1>Welcome!</h1>
        <Routes>
          <Route exact path="/" element={<SignUp/>} />
          <Route exact path="/signin"  element={<SignIn/>} />
        </Routes>
      </Router>

    </div>
      
    
  );
}


export default App;
