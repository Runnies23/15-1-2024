import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Home from './pages/home';
import Menu from './pages/menu';
import ShowBook from './pages/showbook';
import Schedule from './pages/schedule';
import Comunity from './pages/community';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/books/:id' element={<ShowBook />} />
        <Route path='/schedule' element={<Schedule/>} />
        <Route path='/comunity' element={<Comunity/>} />
        
        </Routes>
        </BrowserRouter>
  </div>
  );
}

export default App;
