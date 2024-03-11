import { Route, Routes } from 'react-router-dom';
// Pages
import TestPage from './pages/test/TestPage';
import HomePage from './pages/home/HomePage';
import IndexPage from './pages/index/IndexPage';
import TestPage2 from './pages/test/TestPage2';
import GalleryPage from './pages/gallery/GalleryPage';
import FetishesPage from './pages/fetishes/FetishesPage';
import TributePage from './pages/tribute/TributePage';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<IndexPage />} />
      <Route path='/explore' element={<HomePage />} />
      <Route path='/gallery-of-the-queen' element={<GalleryPage />} />
      <Route path='/fetish-pleasure' element={<FetishesPage />} />
      <Route path='/tributes-to-the-queen' element={<TributePage />} />
      <Route path='/test' element={<TestPage />} />
      <Route path='/test2' element={<TestPage2 />} />
    </Routes>
  );
}

export default App;
