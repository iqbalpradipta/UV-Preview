import React from "react";

function Product() {
  const menuItems = [
    {
      id: 1,
      name: "Nanny's Pavillon By Altima Group",
      image:
        "https://uvproduction.oss-ap-southeast-5.aliyuncs.com/nero/assets/images/2024-09-23T06%3A41%3A22.886Z1727073682-group.jpeg",
      discount: "Up To 24%",
    },
    {
      id: 2,
      name: "Karnivor By Altima Group",
      image:
        "https://uvproduction.oss-ap-southeast-5.aliyuncs.com/nero/assets/images/2024-09-23T06%3A41%3A42.330Z1727073702-group.jpeg",
      discount: "Up To 10%",
    },
    {
      id: 3,
      name: "Kafe Betawi",
      image:
        "https://uvproduction.oss-ap-southeast-5.aliyuncs.com/nero/assets/images/2024-09-23T06%3A42%3A00.425Z1727073720-group.png",
      discount: "Up To 8%",
    },
    {
      id: 4,
      name: "Kopi Kotak",
      image:
        "https://uvproduction.oss-ap-southeast-5.aliyuncs.com/nero/assets/images/2024-09-23T06%3A42%3A16.764Z1727073736-group.png",
      discount: "Up To 15%",
    },
  ];
  return (
    <>
      <section className="bg-white p-8 border border border-green-600 rounded-xl mb-10 shadow-[0px_0px_29px_-10px_rgba(17,85,51,0.65)]">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Product Unggulan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-t-lg w-full h-40 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 16.343l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold mb-2">{item.name}</h3>
                  <div className="bg-green-100 text-green-600 text-center text-xs font-medium py-1 px-3 rounded-full">
                    Disc {item.discount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600">
            Jelajahi Product Lainnya !
          </button>
        </div>
      </section>
    </>
  );
}

export default Product;
