import React from "react";

import { BottomNavbar } from "./BottomNavbar";
// import { AuthenticateButton, Button } from "./Button";
import { MiddleNavbar } from "./MiddleNavbar";
import { TopNavbar } from "./TopNavbar";
import { LogInButton } from "./LogInButton";

export const Navbar = () => {
  return (
    <div>
      <TopNavbar />
      <MiddleNavbar />
      <BottomNavbar />
      {/* <LogInButton /> */}
    </div>
  );
};
