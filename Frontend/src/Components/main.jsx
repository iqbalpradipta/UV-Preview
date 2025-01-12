import React from "react";

function Main() {
  return (
    <>
      <section className="bg-green-200 p-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Bagian Kiri: Teks */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-green-500 font-bold uppercase mb-2">
              Ultra Voucher
            </p>
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              Mudah Berbelanja <br /> dengan Voucher
            </h1>
            <p className="text-gray-700 mb-6">
                Ultra Voucher merupakan perusahaan teknologi Indonesia yang bergerak di 
                bidang industri voucher belanja, gift card, rewards dan loyalty engine yang 
                memberikan kemudahan bagi masyarakat dalam akses dan berbelanja melalui voucher.
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600">
              Belanja Sekarang !
            </button>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative">
              <img
                src="/shopping.png"
                alt="shooping"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
