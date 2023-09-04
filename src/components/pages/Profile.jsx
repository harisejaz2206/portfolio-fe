import React from 'react';
import VerticalMenu from '../VerticalMenu';
import ProfileHero from '../ProfileHero';
import ProfileCard from '../ProfileCard';
import ProfileMenu from '../ProfileMenu';

const Profile = () => {
  return (
    <div>
      <VerticalMenu />
      <ProfileHero />
      <div className='flex py-6 px-28 '>
      <ProfileMenu />
      <ProfileCard />
      </div>
    </div>
  );
}

export default Profile;
