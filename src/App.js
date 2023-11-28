import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './Pages/Loading';
import Main from './Pages/Main';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route exact path="/" element={<Loading />}/>
          <Route path='/main' element={<Main />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
