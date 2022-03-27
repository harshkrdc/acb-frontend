import Header from './Header';
import Homepage from './Homepage';
import ProjectDetails from './Project-Details';
import './App.css';
import LoginPage from './LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="content">
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/project/:id' element={<ProjectDetails/>} />
        </Routes>
      </div>
      {/* <LoginPage/> */}
    </div>
    </Router>
  );
}

export default App;
