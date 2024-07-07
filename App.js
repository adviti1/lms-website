import React from 'react';
import './App.css';
import Nav from './Nav';
import ID from './ID';
import Menu from './Menu';
import Welcome from './Welcome';
import Boxes from './Boxes'

function App() {
  return (
    <div>
      <div className='s1'>
        <Nav />
      </div>
      <div className='a'>
        <div className='b'>
          <div className='s3'>
            <ID />
          </div>
          <div className='s4'>
            <Menu />
          </div>
        </div>
        <div className='c'>
          <div className='s2'>
            <Welcome/>
            <Boxes/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
