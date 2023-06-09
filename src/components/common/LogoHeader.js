import React from "react";
import { SiNike } from "react-icons/si";

const LogoHeader = () => {
  return (
    <div className="mb-4 flex items-center justify-center">
      <span>
        <SiNike className="text-7xl" />
      </span>
      <span className="text-4xl font-extrabold">Just Do It</span>
    </div>
  );
};

export default LogoHeader;
