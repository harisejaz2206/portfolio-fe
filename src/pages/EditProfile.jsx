import React from "react";
import VerticalMenu from "../components/VerticalMenu";
import EditProfileCard from "../components/EditProfileCard";
import EditProfileHero from "../components/EditProfileHero";
import ProfileMenu from "../components/ProfileMenu";

const EditProfile = () => {
  return (
    <div>
      <VerticalMenu />
      <EditProfileHero />
      <div className="flex py-6 px-28">
        <ProfileMenu />
        <EditProfileCard />
      </div>
    </div>
  );
};

export default EditProfile;
