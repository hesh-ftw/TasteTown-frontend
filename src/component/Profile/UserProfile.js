import React from "react";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UserProfile = () => {
  const handleLogout = () => {
    console.log("User logged out"); // Replace with actual logout logic
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center mt-10"
        style={{ position: "relative", zIndex: 1 }}>
      <div className="flex flex-col items-center justify-center">
        <AccountCircleIcon sx={{ fontSize: "9rem" }} />
        <h1 className="py-5 text-2xl font-semibold">Taste Town </h1>
        <p>Email: ckkkkkkkkh@gmail.com</p>
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
