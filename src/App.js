import React from 'react';

import './App.css';
import Profile from './Profile/profile';
import profilePicture from './Profile/Moetez.jpg';
function App() {
  
  
  return (
    <>
      <Profile fullName='Moetez Chniti' bio='Too much to talk' profession='Developper'>
      {profilePicture}
        </Profile>
    </>
  );
}

export default App;
