import React from "react";

const FooterBottom = () => {
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        © {new Date().getFullYear()}. All rights reserved by Sourabh Bhatt
      </p>
    </div>
  );
};

export default FooterBottom;
