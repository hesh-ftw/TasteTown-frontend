import React from "react";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../State/Authentication/Action";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {

  const {auth}= useSelector(store=>store);

  const dispatch = useDispatch();
  const navigate= useNavigate();
  const handleLogout = () => {
    console.log("User logged out"); 
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center mt-10"
        style={{ position: "relative", zIndex: 1 }}>
      <div className="flex flex-col items-center justify-center">
        <AccountCircleIcon sx={{ fontSize: "9rem" }} />
        <h1 className="py-5 text-2xl font-semibold">Taste Town </h1>
        <p>Email: {auth.user?.email}</p>
        <Button

          variant="contained"
          onClick={handleLogout}
          sx={{ margin: "2rem 0rem", background:'gray' }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
