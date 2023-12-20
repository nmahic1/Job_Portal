import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <footer>{` © ${year} Job Portal. Designed By Nejla Mahic. `}</footer>
    </div>
  );
}

export default Footer;
