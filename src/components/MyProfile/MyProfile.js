import React, { useState } from 'react';
import './MyProfile.css';
import Sections from '../Sections/Sections';
import profileImage from '../../Assets/Image_292.png';
import editIcon from '../../Assets/edit.svg';

function MyProfile() {
  return (
    <>
      <Sections name="My Profile" />
      <div className="profile-container">
        <div className='image-container'>
          <img src={profileImage} alt="profile image" />
          <img src={editIcon} alt="Description of Icon" />
        </div>
        <div className='profile-details'>
          <h2>Divya Charterjee</h2>
          <header>Designation</header>
          <div>Assistant Manager - HR</div>
          <div className='company'>
            <header>Comoany Name</header>
            <div>XXY Company Name</div>
          </div>
        </div>
        <div className='about'>
          <header className='about-me'>About Me</header>
          <p>
            Microsoft enable digital transformation for the era
            of an intelligent cloud and an intelligent edge. Its 
            mission is to empower every person and every organization
            on the planet to achieve more. Microsoft set up Its india
            operations in 1990. Microsoft in India offers its global
            cloud services from local data centers to accelerate digital
            transformation across India start-ups, bussiness, and
            government agencies.
          </p>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
