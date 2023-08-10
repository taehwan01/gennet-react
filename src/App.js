import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from './components/Navigation/Navigation';
import SettingProfile from './pages/SettingProfile/SettingProfile';
import SettingProfileEdit from './pages/SettingProfileEdit/SettingProfileEdit';
import MyClasses from './pages/MyClasses/MyClasses';
import RequestClass from './pages/RequestClass/RequestClass';
import RequestClassConfirm from './pages/RequestClassConfirm/RequestClassConfirm';
import ClassChatroom from './pages/ClassChatroom/ClassChatroom';
import Login from './pages/Login/Login';
import Register1 from './pages/Register/Register1';
import Register2 from './pages/Register/Register2';
import Main from './pages/Main/Main';
import './App.css';

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className='App youth-page'>
      <ScrollToTopOnNavigate />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register'>
          <Route index element={<Register1 />} />
          <Route path='2' element={<Register2 />} />
        </Route>
        <Route
          element={
            <>
              <Navigation />
              <hr className='navigation-bar-hr' />
            </>
          }
        >
          {user.type === 'SENIOR' && (
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
          )}

          {user.type === 'YOUTH' && (
            <Route path='/youth'>
              <Route index element={<Main />} />
              <Route path='my-classes' element={<MyClasses />} />
              <Route path='request-class'>
                <Route index element={<RequestClass />} />
                <Route path='confirmed' element={<RequestClassConfirm />} />
              </Route>
              <Route path='profile' element={<SettingProfile />} />
              <Route path='profile-edit' element={<SettingProfileEdit />} />
            </Route>
          )}

          <Route path='/class-chat/:roomId' element={<ClassChatroom />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
