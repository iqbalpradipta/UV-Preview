import React from "react";

function Article() {
  const articles = [
    {
      id: 1,
      image:
        "https://blog.ultravoucher.co.id/wp-content/uploads/2024/09/uv-blog-mrt.jpg",
      title:
        "Pembelian Voucher Digital Kini Lebih Praktis Lewat Aplikasi MyMRT",
      description:
        "PT Mass Rapid Transit Jakarta (MRT Jakarta) terus berinovasi untuk meningkatkan kenyamanan dan menarik minat ribuan pengguna, salah satunya dengan memperkenalkan fitur baru pada aplikasi MyMRT-J. Fitur ini memungkinkan pengguna membeli voucher digital langsung melalui aplikasi.",
      link: "#",
    },
    {
      id: 2,
      image:
        "https://blog.ultravoucher.co.id/wp-content/uploads/2024/09/Sosial-Media_Vivo-x-Ultra-Voucher_Banner.jpg",
      title:
        "Kerjasama Ultra Voucher & Vivo : Dapatkan Kupon 50ribu untuk Pembelian Seri Vivo V40",
      description:
        "Vivo terus berinovasi dalam menghadirkan smartphone yang mampu memenuhi kebutuhan beragam pengguna, terutama bagi mereka yang menginginkan performa tinggi dan kemampuan fotografi profesional dalam satu perangkat. Komitmen ini diwujudkan melalui vivo V Series, yang secara konsisten menawarkan smartphone dengan teknologi mutakhir.",
      link: "#",
    },
    {
      id: 3,
      image:
        "https://blog.ultravoucher.co.id/wp-content/uploads/2024/09/FINAL_UV-B2B-Content-for-Livin-Mandiri-Web-Banner_4-Sep.jpg",
      title:
        "Sekarang Kamu Bisa Beli Voucher Belanja Digital di Livin Sukha Mandiri!",
      description:
        "Kini, membeli voucher belanja digital langsung melalui internet banking bisa dilakukan dengan Ultra Voucher di Aplikasi Livin Sukha Mandiri. Ultra Voucher bekerja sama dengan Bank Mandiri untuk menghadirkan fitur pembelian voucher digital di platform internet banking Livin Sukha Mandiri. Fitur ini melengkapi berbagai layanan yang tersedia di Livin Sukha, yang tidak hanya mendukung kebutuhan masyarakat dalam melakukan berbagai transaksi finansial, tetapi juga menyediakan solusi gaya hidup yang praktis.",
      link: "#",
    },
  ];

  const truncate = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Article</h2>
        <p className="text-gray-600 mt-4">
          Tetap Update dengan kami seputar Promo dan Informasi menarik setiap
          harinya !
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">
                {article.title}
              </h3>
              <p className="text-gray-600 mt-2">
                {truncate(article.description, 100)}
              </p>
              <a
                href={article.link}
                className="text-orange-500 font-semibold mt-4 block hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600">
          Artikel Lainnya !
        </button>
      </div>
    </div>
  );
}

export default Article;
