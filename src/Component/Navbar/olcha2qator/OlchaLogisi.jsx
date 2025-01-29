import React from "react";
import InputValu from "../olcha2qator/InputValu";
import Bars from "../../ikonkalar/Bars";
import Savatchalar from "./NavbarButtom";
import Katalog from "./Katalog";
import { Link } from "react-router";
function OlchaLogisi({}) {
  return (
    <div className="mt-10">
      <div className="container flex items-center justify-between">
        <Link to={"/"}>
          <img
            width={100}
            src="https://olcha.uz/_nuxt/plus.lRzD4Jf7.png"
            alt=""
          />
        </Link>
        <div>
          <Katalog />
        </div>
        <InputValu />
        <Savatchalar />
      </div>
    </div>
  );
}

export default OlchaLogisi;
