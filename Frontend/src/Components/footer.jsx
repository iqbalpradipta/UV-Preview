import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faTiktok,
  faGooglePlay,
  faAppStoreIos
} from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <footer className="bg-green-800 text-white py-5">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="text-xl font-bold text-yellow-400">Our Office</h3>
          <p className="mt-4 text-sm">
            Jln. Tebet Barat IX No. 35 BB RT.005 RW.005, Tebet, Jakarta Selatan,
            DKI Jakarta 12810
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-yellow-400">
            Customer Support
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center">
              <span className="mr-2">📧</span>
              info@ultravoucher.co.id
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              021 2283 1000
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-yellow-400">Social Media</h3>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400">
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="hover:text-yellow-400">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:text-yellow-400">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-yellow-400">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" className="hover:text-yellow-400">
                <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-yellow-400">
            Bergabung dengan Kami
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Hubungan Investor
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Produk & Layanan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Perusahaan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Investor
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-yellow-400">
            Unduh Aplikasi Kami
          </h3>
          <div className="flex flex-col space-y-4 mt-4">
            <a
              href="#"
              className="flex items-center justify-center bg-black p-2 rounded-lg hover:bg-black"
            >
              <FontAwesomeIcon icon={faGooglePlay} />
              <span className="ml-2">Google Play</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center bg-black p-2 rounded-lg hover:bg-black"
            >
              <FontAwesomeIcon icon={faAppStoreIos} />
              <span className="ml-2">App Store</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-4 text-center text-sm">
        <p>© 2025 Ultra Voucher. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;
