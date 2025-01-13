import { useState } from "react";
import { Checkbox } from "@nextui-org/react";

const CheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(false);
  // setIsChecked: Fungsi ini digunakan untuk memperbarui nilai dari isChecked.
  // useState(false): Nilai awal dari isChecked adalah false, artinya checkbox akan
  // dalam kondisi tidak tercentang pada awalnya.

  // Fungsi untuk memperbarui state saat checkbox diklik
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked); // Menggunakan e.target.checked untuk mendapatkan status tercentang
  };
  //handleCheckboxChange: Fungsi ini akan dipanggil setiap kali checkbox diubah
  //statusnya (tercentang atau tidak). Fungsi ini menerima objek event (e) yang
  //memiliki properti e.target.checked, yang menunjukkan apakah checkbox dalam
  //kondisi tercentang (true) atau tidak tercentang (false).

  //setIsChecked(e.target.checked): Di sini, status checkbox diperbarui dengan nilai
  //checked yang diambil dari objek event, yang kemudian di-set ke state isChecked.

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Checkbox status
        </h3>
        <p className="text-gray-600 mb-4">
          Status: {isChecked ? "Checked" : "Unchecked"}
        </p>
        {/* jika isChecked bernilai true (checkbox tercentang): Teks "Checked" akan
        ditampilkan.
        Jika isChecked bernilai false (checkbox tidak tercentang): Teks "Unchecked" 
        akan ditampilkan. */}
        <Checkbox
          checked={isChecked}
          //Menampilkan status checkbox, apakah tercentang atau tidak,
          //berdasarkan nilai state isChecked.
          onChange={handleCheckboxChange}
          //Mengatur fungsi yang akan dijalankan setiap kali status checkbox berubah,
          //untuk memperbarui nilai state isChecked.
          color="primary"
        >
          Terima syarat dan ketentuan
        </Checkbox>
      </div>
    </div>
  );
};

export default CheckboxExample;
