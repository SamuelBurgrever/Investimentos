
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './paginas/home/Home'
import AreaLogada from './paginas/areaLogada/AreaLogada';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/paginas' element={<AreaLogada/>}/>
      </Routes>
    </Router>
  );
}


export default App
