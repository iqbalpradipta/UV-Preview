import React from "react";

function About() {
  return (
    <div className="bg-green-100 flex flex-col md:flex-row items-center p-8 md:p-16">
      <div className="relative bg-green-200 p-8 rounded-xl w-full md:w-1/2 flex justify-center">
        <img
          src="/UVLogo.png"
          alt="ppl"
          className="relative z-10 w-64 h-64 object-cover rounded-full shadow-lg"
        />
        <div className="absolute inset-0 bg-green-300 rounded-xl transform translate-x-4 translate-y-4"></div>
      </div>

      <div className="mt-8 md:mt-0 md:ml-16 w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-800">
          Kualitas Pelayanan Untuk Melayani Pelanggan Adalah Prioritas.
        </h1>
        <p className="text-gray-600 mt-4">
          Kami membantu pelanggan untuk memberikan solusi jika anda memiliki masalah.
          Masalah anda akan kami bantu selesaikan secepatnya.
        </p>
        <button className="mt-6 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
          Hubungi Kami !
        </button>
      </div>
    </div>
  );
}

export default About;
