import React from "react";

function Main() {
  return (
    <>
      <section className="bg-green-200 p-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-green-500 font-bold uppercase mb-2">
              Ultra Voucher
            </p>
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              Mudah Berbelanja <br /> dengan Voucher
            </h1>
            <p className="text-gray-700 mb-6">
              Simpel, praktis, dan tetap hemat~. Yuk, cobain sekarang dan rasain
              betapa mudahnya belanja voucher favoritmu!<br />
              Ultra Serba Bisa, Pakai Ultra Voucher
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600">
              Belanja Sekarang !
            </button>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative">
              <img src="/shopping.png" alt="shooping" className="w-100" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
