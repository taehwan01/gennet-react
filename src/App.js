import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Main from './pages/Senior/Main/Main';
import SettingProfile from './pages/SettingProfile/SettingProfile';
import SettingProfileEdit from './pages/SettingProfileEdit/SettingProfileEdit';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <hr className='navigation-bar-hr' />
      <Routes>
        <Route path='/senior'>
          <Route index element={<Main />} />
          <Route path='my-classes' element={<div>my classes</div>} />
          <Route path='request-class' element={<div>request class</div>} />
          <Route path='profile' element={<SettingProfile />} />
          <Route path='profile-edit' element={<SettingProfileEdit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
