// App.jsx
import {BrowserRouter as Route, Switch } from 'react-router-dom';
import UniversalLayout from './components/UniversalLayout';
import HomePage from './pages/HomePage';

import NotFound from './pages/NotFound';
import ComingSoon from './pages/ComingSoon';
import ScheduleSholat from './pages/ScheduleSholat';


const App = () => {
  return (
      <Switch>

        <Route path="/" element={<UniversalLayout />}>
      
          <Route path="/" element={<HomePage />} />
          <Route path="/SholatSchedule" element={<ScheduleSholat />} />
    
          {/* catch */}
          <Route path='*' element={<NotFound/>} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Route>
      </Switch>
    
    
  );
};

export default App;
