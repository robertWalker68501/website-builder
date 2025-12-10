import { Routes, Route } from 'react-router-dom';

import Community from './pages/Community.tsx';
import Home from './pages/Home.tsx';
import MyProjects from './pages/MyProjects.tsx';
import Preview from './pages/Preview.tsx';
import Pricing from './pages/Pricing.tsx';
import Projects from './pages/Projects.tsx';
import View from './pages/View.tsx';
import Navbar from './components/Navbar.tsx';

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/pricing'
          element={<Pricing />}
        />
        <Route
          path='/projects/:projectId'
          element={<Projects />}
        />
        <Route
          path='/projects'
          element={<MyProjects />}
        />
        <Route
          path='/preview/:projectId'
          element={<Preview />}
        />
        <Route
          path='/preview/:projectId/:versionId'
          element={<Preview />}
        />
        <Route
          path='/community'
          element={<Community />}
        />
        <Route
          path='/view/:projectId'
          element={<View />}
        />
      </Routes>
    </div>
  );
};

export default App;
