import { Route, Routes } from 'react-router-dom';
// Pages
import TestPage from './pages/test/TestPage';
import IndexPage from './pages/index/IndexPage';
import TestPage2 from './pages/test/TestPage2';

function App() {
  return (
    <Routes>
      <Route path='/' element={<IndexPage />} />
      <Route path='/test' element={<TestPage />} />
      <Route path='/test2' element={<TestPage2 />} />
    </Routes>
  );
}

export default App;
