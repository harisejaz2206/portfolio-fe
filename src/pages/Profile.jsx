import React from "react";
import VerticalMenu from "../components/VerticalMenu";
import ProfileHero from "../components/ProfileHero";
import ProfileCard from "../components/ProfileCard";
import ProfileMenu from "../components/ProfileMenu";

const Profile = () => {
  return (
    <div>
      <VerticalMenu />
      <ProfileHero />
      <div className="flex py-6 px-28 ">
        <ProfileMenu />
        <ProfileCard />
      </div>
    </div>
  );
};

export default Profile;
