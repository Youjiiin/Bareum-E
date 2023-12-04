import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './Pages/Loading';
import Main from './Pages/Main';
import Study from './Pages/studyPages/Study';
import Test from './Pages/testPages/Test';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route exact path="/" element={<Loading />}/>
          <Route path='/main' element={<Main />}/>
          <Route path='/study' element={<Study />}/>
          <Route path='/test' element={<Test />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
