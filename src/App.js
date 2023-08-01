import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <hr className='navigation-bar-hr' />
      <Routes>
        <Route path='/senior'>
          <Route index element={<div>senior main</div>} />
          <Route path='my-classes' element={<div>my classes</div>} />
          <Route path='request-class' element={<div>request class</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
