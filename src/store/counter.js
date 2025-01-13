const DEFAULT_STATE = {
  count: 0,
};

// Membuat reducer/pecahan data
// Apapun yang direturn function reducer akan menjadi data
export const counterReducer = (state = DEFAULT_STATE, action) => {
  // Ketika reducer dieksekusi ulang setelah eksekusi pertama,
  // state ini isinya bentuk data objek
  // action isinya sebuah objek
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1 };
    // State yang lama kita buka, selanjutnya ubah count menjadi state.count + 1
  } else if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
    // State yang lama kita buka, selanjutnya ubah count menjadi state.count - 1
  }  else if (action.type === "SET") {
    return { ...state, count: action.payload }; // Update global count sesuai dengan nilai yang diberikan
  } else {
    return state; // Jika tipe aksi tidak cocok, kembalikan state tanpa perubahan
  }
};

// Di awal aplikasi berjalan, semua reducer akan dieksekusi, tapi awalnya action itu kosong.
// Reducer akan berjalan kembali ketika memanggil dispatch.
