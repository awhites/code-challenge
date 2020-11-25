import React, { useEffect, useState } from "react";
import { ProfileCard } from "./components";

export const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // my favourite state management is still redux saga!
  useEffect(() => {
    fetch("http://localhost:4000/api", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setUser(response.user);
        setLoading(false);
      });
  });
  return (
    <>
      {!loading && (
        <ProfileCard
          name={user.name}
          profileUrl={user.profileUrl}
          experience={user.experience}
          attributes={user.attributes}
          recentAccomplishment={user.recentAccomplishment}
        />
      )}
    </>
  );
};
