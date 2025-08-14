import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-10 border-t">
      © {new Date().getFullYear()} MyStay. All rights reserved.
    </footer>
  );
};

export default Footer;
