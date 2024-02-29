import { Route, Routes } from 'react-router-dom';
// Pages
import TestPage from './pages/test/TestPage';
import HomePage from './pages/home/HomePage';
import IndexPage from './pages/index/IndexPage';
import TestPage2 from './pages/test/TestPage2';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<IndexPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/test' element={<TestPage />} />
      <Route path='/test2' element={<TestPage2 />} />
    </Routes>
  );
}

export default App;
