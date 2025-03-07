import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/home/HomePage';
import IndexPage from './pages/index/IndexPage';
import GalleryPage from './pages/gallery/GalleryPage';
import FetishesPage from './pages/fetishes/FetishesPage';
import TributePage from './pages/tribute/TributePage';
import BlogPage from './pages/blog/BlogPage';
import FinDomPage from './pages/findom/FinDomPage';
import LoginPage from './pages/admin/LoginPage';
import AdminPage from './pages/admin/AdminPage';
import EditBlogPage from './pages/blog/EditBlogPage';
import ContactPage from './pages/contact/ContactPage';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<IndexPage />} />
      <Route path='/explore' element={<HomePage />} />
      <Route path='/gallery-of-the-queen' element={<GalleryPage />} />
      <Route path='/fetish-pleasure' element={<FetishesPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/tributes-to-the-queen' element={<TributePage />} />
      <Route path='/kinky-blog' element={<BlogPage />} />
      <Route path='/fin-dom-control' element={<FinDomPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/admin/edit-blog' element={<EditBlogPage />} />
    </Routes>
  );
}

export default App;
