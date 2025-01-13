import { useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);
  //items: Variabel state untuk menyimpan daftar item (dalam bentuk array).
  //setItems: Fungsi untuk memperbarui nilai items.
  const [input, setInput] = useState("");
  //input: Variabel state untuk menyimpan nilai input teks.
  //setInput: Fungsi untuk memperbarui nilai input.

  //Fungsi untuk menambahkan item baru ke daftar
  const addItem = () => {
    //Mengecek apakah input tidak kosong atau hanya berupa spasi.
    if (input.trim() !== "") {
      setItems([...items, input]);
      //Menambahkan nilai input ke array items dengan menggunakan sintaks
      //spread operator (...) untuk membuat salinan array lama
      setInput(""); // Reset input field
      //Mengatur ulang input menjadi string kosong setelah item ditambahkan
    }
  };

  return (
    <div className="p-6 max-w-xs mx-auto bg-gray-50 rounded-lg shadow-md">
      {/* mx-auto untuk  memusatkan elemen secara horizontal dalam kontainer atau parent element */}
      <h1 className="text-center text-gray-800 text-2xl mb-5">Item List</h1>
      <input
        type="text"
        value={input}
        //Mengikat nilai input ke state input
        onChange={(e) => setInput(e.target.value)}
        //Memperbarui state input saat pengguna mengetik di kolom input.
        placeholder="Add an item"
        className="w-full p-3 mb-3 border border-gray-300 rounded-md text-lg"
      />
      <button
        onClick={addItem}
        className="w-full p-3 bg-blue-500 text-white rounded-md text-lg mb-5 hover:bg-blue-700"
      >
        Add
      </button>
      {/* //Menjalankan fungsi addItem saat tombol diklik. */}
      <ul className="list-none p-0">
        {items.map((item, index) => (
          <li key={index} className="bg-gray-200 mt-2 mb-1 p-3 rounded-md">
            {item}
          </li>
        ))}
      </ul>
      {/* Mengiterasi array items untuk menampilkan setiap item sebagai 
        elemen <li>. */}
      {/* key={index}: Properti unik untuk setiap elemen dalam daftar, 
      membantu React mengidentifikasi elemen mana yang perlu diperbarui. */}
    </div>
  );
};

export default ItemList;
