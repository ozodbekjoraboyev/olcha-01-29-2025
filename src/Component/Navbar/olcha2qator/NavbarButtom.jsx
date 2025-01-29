import React from "react";
// import Analytics03Icon from "../../ikonkalar/analy";
import sertsa1 from "../../../assets/sertsa1.svg"
import ShoppingCart02Icon from "../../ikonkalar/Soping";
import UserIcon from "../../ikonkalar/User";
function Savatchalar() {
  return (
    <div className="flex justify-between items-center gap-5 ">
      <div className="flex flex-col items-center">
        {/* <Analytics03Icon /> */}
        <p>Taqqoslash</p>
      </div>
      <div className="flex flex-col items-center">
          <img className="w-6" src={sertsa1} alt="" />
        <p>Sevimlilar</p>
      </div>
      <div className="flex flex-col items-center">
        <ShoppingCart02Icon />
        <p>Savatcha</p>
      </div>
      <div className="flex flex-col items-center">
        <UserIcon />
        <p>Krish</p>
      </div>
    </div>
  );
}

export default Savatchalar;
