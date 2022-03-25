
import { React , useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home';
import MainLayout from './views/layouts/main';

function App() {
  return (
    <div>
      <Router>
        <MainLayout>
          <Routes>
            <Route
              path='/'
              element={<Home/>}
            ></Route>
          </Routes>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
