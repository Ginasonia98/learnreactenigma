/* eslint-disable react/prop-types */
import{ createContext, useState, useContext } from "react";

// Buat context untuk menyimpan status login dan data pengguna
export const SignInContext = createContext();
//Dalam hal ini, SignInContext akan digunakan untuk menyimpan dan mengelola status login dan data pengguna (seperti objek pengguna).

// Provider untuk menyediakan data ke komponen lain
//Provider ini menyediakan data dari context (seperti status login dan fungsi login/logout) kepada komponen-komponen yang
// membutuhkan data tersebut. children merujuk pada komponen yang dibungkus oleh SignInContextProvider (komponen anak).
export const SignInContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Cek localStorage jika ada data pengguna yang tersimpan
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  //useState digunakan untuk mengelola status login. Awalnya, state user diisi dengan data pengguna yang ada di localStorage (jika ada) melalui 
  //fungsi JSON.parse.
// Jika ada data yang disimpan di localStorage, itu akan diambil dan diparcing menjadi objek JavaScript.
// Jika tidak ada data pengguna yang tersimpan, maka user di-set ke null.

  // Fungsi untuk login dan menyimpan data pengguna di localStorage
  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  //Fungsi ini digunakan untuk menangani login. Ketika pengguna berhasil login, data pengguna akan disimpan di localStorage dan 
  //state user diubah untuk menyimpan data pengguna yang baru.
// JSON.stringify(userData) digunakan untuk mengonversi objek userData menjadi format string sehingga dapat disimpan di localStorage.

  // Fungsi untuk logout dan menghapus data pengguna di localStorage
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  //Data pengguna dihapus dari localStorage menggunakan localStorage.removeItem("user").
// State user diubah menjadi null, menandakan bahwa tidak ada pengguna yang sedang login.

  return (
    <SignInContext.Provider value={{ user, login, logout }}>
      {children}
    </SignInContext.Provider>
  );
  //SignInContext.Provider adalah tempat yang membungkus seluruh aplikasi atau komponen lain yang membutuhkan akses ke context ini.
  //value yang diberikan kepada Provider adalah objek yang berisi:
  // user: status pengguna yang sedang login (data pengguna atau null).
  // login: fungsi untuk login.
  // logout: fungsi untuk logout.
  // Komponen children adalah komponen yang dibungkus oleh SignInContextProvider dan akan dapat mengakses nilai context tersebut.
};

// Custom hook untuk mengakses context
export const useSignInContext = () => useContext(SignInContext);
