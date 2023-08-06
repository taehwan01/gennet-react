import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Main from './pages/Senior/Main/Main';
import SettingProfile from './pages/SettingProfile/SettingProfile';
import SettingProfileEdit from './pages/SettingProfileEdit/SettingProfileEdit';
import MyClasses from './pages/Senior/MyClasses/MyClasses';
import RequestClass from './pages/Senior/RequestClass/RequestClass';
import RequestClassConfirm from './pages/Senior/RequestClassConfirm/RequestClassConfirm';
import ClassChatroom from './pages/ClassChatroom/ClassChatroom';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <hr className='navigation-bar-hr' />
      <Routes>
        <Route path='/senior'>
          <Route index element={<Main />} />
          <Route path='my-classes' element={<MyClasses />} />
          <Route path='request-class'>
            <Route index element={<RequestClass />} />
            <Route path='confirmed' element={<RequestClassConfirm />} />
          </Route>
          <Route path='profile' element={<SettingProfile />} />
          <Route path='profile-edit' element={<SettingProfileEdit />} />
        </Route>
        <Route path='/class-chat/:roomId' element={<ClassChatroom />} />
      </Routes>
      <Login />
    </div>
  );
}

export default App;
