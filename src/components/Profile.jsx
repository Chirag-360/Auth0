import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Profile = () => {
  const data = useSelector((state) => state.profile.value);

  console.log(data);
  return (
    <>
      <h1>Profile Page</h1>
      <img src={data.picture} alt="" />
      <p>Name : {data.name}</p>
      <p>NickName : {data.nickname}</p>
      <p>Email : {data.email}</p>
      <p>Updated At : {data.updated_at}</p>
    </>
  );
};

export default Profile;
