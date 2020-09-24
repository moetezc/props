import React from 'react' 
import PropTypes from 'prop-types';
import profilePicture from './Moetez.jpg';


const Profile =(props)=> {
    return (
        <div className='Profile'>
        <div style={{width:'500px',marginLeft:'30%',marginTop:'25px' }}>
        <div style={{backgroundColor:'red', color:'whitesmoke' }}>
          <h1>Profile</h1>
      </div>
        
      <h3>{props.fullName}</h3>
      <h3>{props.bio}</h3>
      <h3>{props.profession}</h3>
      
              
             <img src={props.children} alt='Profile Picture' style={{width: '200px'}} />
              
             
              </div>
              
              </div>
      )};
    
Profile.defaultProps = {
    fullName: 'Nothing',
    bio: 'Nothing',
    profession: 'Nothing',
}
    Profile.propTypes = {
        fullName: PropTypes.string,
        bio: PropTypes.string,
        profession: PropTypes.string,
        image: PropTypes.string,
      }

export default Profile ;
