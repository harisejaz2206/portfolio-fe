import React from "react";
import VerticalMenu from "../components/VerticalMenu";
import LoyaltyHero from "../components/LoyaltyHero";
import ProfileMenu from "../components/ProfileMenu";
import LoyaltyCard from "../components/LoyaltyCard";

const LoyaltyPoints = () => {
  return (
    <div>
      <VerticalMenu />
      <LoyaltyHero />
      <div className="flex py-6 px-28">
        <ProfileMenu />
        <LoyaltyCard />
      </div>
    </div>
  );
};

export default LoyaltyPoints;
