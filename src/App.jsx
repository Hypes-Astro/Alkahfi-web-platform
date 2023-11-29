// App.jsx
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import UniversalLayout from './components/UniversalLayout';
import HomePage from './pages/HomePage';
import Headline from './components/Headline';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UniversalLayout />}>
      
          <Route path="/" element={<HomePage />} />
          <Route path='/headline' element={<Headline/>} />
          
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </Router>
    
  );
};

export default App;
