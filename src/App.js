import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import Intro from './functions/intro';
import PProjects from './functions/projects';
import Info from './functions/information';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' exact Component={Intro}/>
          <Route path='/projects' exact Component={PProjects}/>
          <Route path='/info' exact Component={Info}/>
        </Routes>
    </HashRouter>
  );
}

export default App;
