import HomePage from './pages/Homepage';
import GalleryPage from './pages/Gallerypage';
import { Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Outlet />} >
          <Route index element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
