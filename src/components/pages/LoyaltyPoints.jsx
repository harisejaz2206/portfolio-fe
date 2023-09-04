import React from 'react';
import VerticalMenu from '../VerticalMenu';
import LoyaltyHero from '../LoyaltyHero';
import ProfileMenu from '../ProfileMenu';
import LoyaltyCard from '../LoyaltyCard';

const LoyaltyPoints = () => {
  return (
    <div>
      <VerticalMenu />
      <LoyaltyHero />
     <div className='flex py-6 px-28'>
      <ProfileMenu />
      <LoyaltyCard />
     </div>
    </div>
  );
}

export default LoyaltyPoints;
