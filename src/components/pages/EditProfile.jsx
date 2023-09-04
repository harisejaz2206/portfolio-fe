import React from 'react';
import VerticalMenu from '../VerticalMenu';
import EditProfileCard from '../EditProfileCard';
import EditProfileHero from '../EditProfileHero';
import ProfileMenu from '../ProfileMenu';

const EditProfile = () => {
  return (
    <div>
      <VerticalMenu />
      <EditProfileHero />
      <div className='flex py-6 px-28'>
      <ProfileMenu />
      <EditProfileCard />  
     </div>
    </div>
  );
}

export default EditProfile;
