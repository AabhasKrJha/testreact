import { Route, Routes } from 'react-router';

import './css/App.css';
import Layout from './layout';
import Homepage from './homepage';

function App() {
  return (
    <Routes>
      <Route path='/' element = {<Layout/>}>
        {/* <Route path='/' element = { <Homepage/> } /> */}
        <Route path={'/blog'} element = { <div>blog</div> } />
      </Route>
    </Routes>
  );
}

export default App;
