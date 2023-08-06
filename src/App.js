import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Main from './pages/Senior/Main/Main';
import SettingProfile from './pages/SettingProfile/SettingProfile';
import SettingProfileEdit from './pages/SettingProfileEdit/SettingProfileEdit';
import MyClasses from './pages/Senior/MyClasses/MyClasses';
import RequestClass from './pages/Senior/RequestClass/RequestClass';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <hr className='navigation-bar-hr' />
      <Routes>
        <Route path='/senior'>
          <Route index element={<Main />} />
          <Route path='my-classes' element={<MyClasses />} />
          <Route path='request-class' element={<RequestClass />} />
          <Route path='profile' element={<SettingProfile />} />
          <Route path='profile-edit' element={<SettingProfileEdit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
