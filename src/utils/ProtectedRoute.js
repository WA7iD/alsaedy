import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Loader from "../Components/Loader";

const ProtectedRoute = ({ component: Component, roles }) => {
  const {
    isAuthenticated,
    user,
    organizationProfile,
    token,
    fetchUserProfile,
    fetchOrgnizationProfile,
    loading,
    getUserPremissions,
    userPremission,
  } = useAuth();
  console.log(user);
  console.log(isAuthenticated);
  console.log("user premy");
  console.log(userPremission.length);
  console.log(organizationProfile);

  // get  user data
  useEffect(() => {
    const fetchData = async () => {
      if ((!user || !organizationProfile) && token) {
        console.log("Fetching user profile with token:", token);
        await fetchUserProfile(token);
        await fetchOrgnizationProfile(token);
      }
    };
    fetchData();
  }, [user, token, fetchUserProfile]);
  useEffect(() => {
    getUserPremissions();
  }, [user]);

  if (userPremission.length < 1 || loading) {
    return <Loader />;
  }
  if (!isAuthenticated) {
    console.log("User is not authenticated, redirecting to login");
    return <Navigate to="/dd/login" />;
  }

  if (user && roles && !userPremission?.some((e) => e?.name === roles)) {
    console.log(userPremission);
    console.log(roles);
    console.log("User role not authorized, redirecting to home");

    return <Navigate to="/dashboard/tasks" />;
  }

  if (!user) {
    console.log("User data is loading...");
    return <div>Loading user information...</div>;
  }

  return <Component />;
};

export default ProtectedRoute;
