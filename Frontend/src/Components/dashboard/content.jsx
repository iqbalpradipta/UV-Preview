import React from "react";

function Content() {
  return (
    <>
      <div className="p-6 bg-gray-100">
        <section className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow p-4 rounded">
            <h3 className="text-lg font-semibold">Jumlah Product</h3>
            <p className="text-2xl font-bold">120</p>
          </div>
          <div className="bg-white shadow p-4 rounded">
            <h3 className="text-lg font-semibold">Jumlah Transaksi</h3>
            <p className="text-2xl font-bold">30</p>
          </div>
          <div className="bg-white shadow p-4 rounded">
            <h3 className="text-lg font-semibold">Total Pendapatan</h3>
            <p className="text-2xl font-bold">Rp. 500.000</p>
          </div>
        </section>
        <section className="bg-white shadow p-4 rounded">
          <h3 className="text-lg font-semibold mb-4">Daftar Voucher</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name Voucher</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Type</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>KFC Rp. 50.000</td>
                <td>49.000</td>
                <td>120</td>
                <td>Rupiah</td>
                <td>F&B</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}

export default Content;
