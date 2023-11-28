import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container flex justify-between mb-2">
        <span>
          <Image
            src="/images/izzatjamallogo.png"
            alt="Logo"
            width={70}
            height={70}
          />
        </span>
        <p className="text-slate-600 mr-4 mt-4">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
