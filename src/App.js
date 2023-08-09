import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import SettingProfile from './pages/SettingProfile/SettingProfile';
import SettingProfileEdit from './pages/SettingProfileEdit/SettingProfileEdit';
import MyClasses from './pages/MyClasses/MyClasses';
import RequestClass from './pages/RequestClass/RequestClass';
import RequestClassConfirm from './pages/RequestClassConfirm/RequestClassConfirm';
import ClassChatroom from './pages/ClassChatroom/ClassChatroom';
import Register2 from './pages/Register/Register2';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          element={
            <>
              <Navigation />
              <hr className='navigation-bar-hr' />
            </>
          }
        >
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
        </Route>
        <Route path='/class-chat/:roomId' element={<ClassChatroom />} />
        <Route path='/register2' element={<Register2 />} />
      </Routes>
    </div>
  );
}

export default App;
