import React, { useEffect, useState } from "react";

function Madal({ madal, setMadal }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (madal) {
      setShowModal(true);
    } else {
      setTimeout(() => setShowModal(false));
    }
  }, [madal]);

  return (
    <>
      {showModal && <div onClick={() => setMadal(true)}></div>}

      <div
        className={`${
          showModal ? "opacity-100 " : "opacity-0 "
        } bg-slate-300 m-auto fixed inset-0 h-[60vh] w-[1500px] rounded-2xl p-4 z-50  mt-60 `}
      >
        <div  className=" flex items-center  border-2 border-red-700 p-3 rounded-xl w-64 gap-3">
          <img
            src="https://olcha.uz/eco-products/eco-products-logo.svg"
            alt=""
          />
          <p className=" text-2xl  text-red-700 ">Olcha Market</p>
        </div>
        <div className="flex ">
          <div className="w-72 h-[300px]   text-2xl overflow-auto">
            <p className="hover:text-red-700">Olcha</p>
            <p className="hover:text-red-700">Olcha</p>
            <p className="hover:text-red-700">Olcha</p>
            <p className="hover:text-red-700">Olcha</p>
            <p className="hover:text-red-700">Olcha</p>
            <p className="hover:text-red-700">Olcha</p>
            <p className="hover:text-red-700">Olcha</p>
            <p className="hover:text-red-700">Olcha</p>
            <p className="hover:text-red-700">Olcha</p>
            <p className="hover:text-red-700">Olcha</p>
            <p className="hover:text-red-700">Olcha</p>
            <p className="hover:text-red-700">Olcha</p>
            <p className="hover:text-red-700">Olcha</p>
            <p className="hover:text-red-700">Olcha</p>
            <p className="hover:text-red-700">Olcha</p>
          </div>
          <div className=" w-full h-[300px]  grid grid-cols-4  pl-4  text-2xl overflow-auto ">
            <div>
              <p className="font-semibold pt-5">Televizorlar</p>
              <p>Toshiba</p>
              <p>Artel</p>
              <p>Shivaki</p>
              <p>Vesta</p>
              <p>Sony</p>
              <p>Premier</p>
              <p>Samsung</p>
              <p>LG</p>
              <p>Hisense</p>
              <p>Immer</p>
              <p>Ziffler</p>
              <p>TCL</p>
              <p>Xiaomi</p>
              <p>Skyworth</p>
              <p>Avalon</p>
              <p>Rulls</p>
              <p>Moonx</p>
              <p className="font-semibold pt-5">Audio</p>
              <p>Musiqa sistemalari</p>
              <p>Akustika</p>
              <p>Mikrofonlar</p>
            </div>{" "}
            <div>
              <p className="font-semibold pt-5">Televizorlar</p>
              <p>Toshiba</p>
              <p>Artel</p>
              <p>Shivaki</p>
              <p>Vesta</p>
              <p>Sony</p>
              <p>Premier</p>
              <p>Samsung</p>
              <p>LG</p>
              <p>Hisense</p>
              <p>Immer</p>
              <p>Ziffler</p>
              <p>TCL</p>
              <p>Xiaomi</p>
              <p>Skyworth</p>
              <p>Avalon</p>
              <p>Rulls</p>
              <p>Moonx</p>
              <p className="font-semibold pt-5">Audio</p>
              <p>Musiqa sistemalari</p>
              <p>Akustika</p>
              <p>Mikrofonlar</p>
            </div>{" "}
            <div>
              <p className="font-semibold pt-5">Televizorlar</p>
              <p>Toshiba</p>
              <p>Artel</p>
              <p>Shivaki</p>
              <p>Vesta</p>
              <p>Sony</p>
              <p>Premier</p>
              <p>Samsung</p>
              <p>LG</p>
              <p>Hisense</p>
              <p>Immer</p>
              <p>Ziffler</p>
              <p>TCL</p>
              <p>Xiaomi</p>
              <p>Skyworth</p>
              <p>Avalon</p>
              <p>Rulls</p>
              <p>Moonx</p>
              <p className="font-semibold pt-5">Audio</p>
              <p>Musiqa sistemalari</p>
              <p>Akustika</p>
              <p>Mikrofonlar</p>
            </div>
            <div>
              <p className="font-semibold pt-5">Televizorlar</p>
              <p>Toshiba</p>
              <p>Artel</p>
              <p>Shivaki</p>
              <p>Vesta</p>
              <p>Sony</p>
              <p>Premier</p>
              <p>Samsung</p>
              <p>LG</p>
              <p>Hisense</p>
              <p>Immer</p>
              <p>Ziffler</p>
              <p>TCL</p>
              <p>Xiaomi</p>
              <p>Skyworth</p>
              <p>Avalon</p>
              <p>Rulls</p>
              <p>Moonx</p>
              <p className="font-semibold pt-5">Audio</p>
              <p>Musiqa sistemalari</p>
              <p>Akustika</p>
              <p>Mikrofonlar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Madal;
