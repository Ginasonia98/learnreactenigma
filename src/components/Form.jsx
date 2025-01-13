import { useState } from "react";

function Form() {
  const [name, setName] = useState("");  // State untuk nama
  const [email, setEmail] = useState("");  // State untuk email
  //name dan email adalah state variables yang akan menyimpan nilai input pengguna.
  //setName dan setEmail adalah fungsi setter yang digunakan untuk memperbarui nilai state name dan email.

  // Fungsi untuk menangani perubahan pada input nama
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  //handleNameChange adalah fungsi yang dipanggil ketika nilai input name berubah.
  //event.target.value mengambil nilai baru dari input (misalnya nama yang dimasukkan pengguna) dan memperbarui state name dengan nilai 
  //tersebut menggunakan setName.

  // Fungsi untuk menangani perubahan pada input email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Fungsi untuk mengirimkan form
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nama: ${name}, Email: ${email}`);  // Menampilkan alert dengan nilai input
  };
  // handleSubmit adalah fungsi yang dipanggil ketika form disubmit.
  // event.preventDefault() mencegah form untuk melakukan refresh halaman secara default ketika disubmit.
  // Setelah itu, alert menampilkan nilai name dan email yang dimasukkan oleh pengguna dalam bentuk pop-up.

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Formulir Pengguna</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Nama:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Masukkan nama Anda"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Masukkan email Anda"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Kirim
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <h2 className="text-lg font-semibold text-gray-700">Data Pengguna:</h2>
        <p className="text-gray-600">Nama: {name}</p>
        <p className="text-gray-600">Email: {email}</p>
      </div>
      {/* Setelah form disubmit, data yang dimasukkan akan ditampilkan di bawah form */}
    </div>
  );
}

export default Form;
