import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import NotFound from './components/not-found/NotFound';
import Posts from './components/posts/Posts';
import PostDetail from './components/post-detail/PostDetail';
import PostsCategory from './components/posts-category/PostsCategory';
import Page from './components/page/Page';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Posts />} />
          <Route path="posts/:postId" element={<PostDetail />} />
          <Route path="posts-categories/:categoryId/posts" element={<PostsCategory />} />
        </Route>

        <Route path="pages/:pageId" element={<Page />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
