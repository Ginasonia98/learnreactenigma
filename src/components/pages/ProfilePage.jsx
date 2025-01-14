/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSignInContext } from "../../context/SignInContext"; // Import context

const ProfilePage = () => {
  const { user } = useSignInContext(); // Ambil data user dari context
  const params = useParams();
  
  // Pastikan 'user' ada di context
  if (!user) {
    return <div>Loading...</div>; // Tampilkan loading jika user belum tersedia
  }

  const [username, setUsername] = useState(user?.username || "");
  //ika objek user ada (tidak null atau undefined) dan memiliki properti username, maka username akan diset ke nilai properti tersebut.
  //Jika user adalah null atau undefined, atau jika properti username tidak ada, maka nilai defaultnya adalah string kosong ("").
// ?. adalah optional chaining, yang memastikan bahwa jika objek user tidak ada atau tidak memiliki properti username, kode tidak akan
//  menyebabkan error dan akan melanjutkan ke nilai default ("").
  const [email, setEmail] = useState(user?.email || "");
  //Jika email ada dan memiliki properti email, maka nilai state email akan diset ke nilai properti tersebut.
// Jika tidak, nilai defaultnya adalah string kosong ("").
  const [isEditing, setIsEditing] = useState(false);
//Ketika isEditing bernilai true, itu biasanya menandakan bahwa pengguna sedang mengedit data (misalnya, nama pengguna atau email), dan 
// antarmuka pengguna akan menyesuaikan diri untuk memungkinkan pengeditan.
// Ketika isEditing bernilai false, antarmuka akan kembali ke mode tampilan biasa, bukan untuk mengedit.
  const saveChanges = () => {
    const updatedUser = { ...user, username, email };
    //enggunakan spread operator untuk menyalin semua properti yang ada di objek user (misalnya, properti lain yang mungkin ada seperti id, age, 
    //dsb.) ke dalam objek baru.
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsEditing(false);
  };
  //Karena localStorage hanya bisa menyimpan data dalam bentuk string, objek JavaScript seperti updatedUser perlu diubah menjadi string 
  //menggunakan JSON.stringify().
  //Ketika isEditing diset ke false, komponen akan keluar dari mode pengeditan dan biasanya akan mengubah antarmuka pengguna kembali ke 
  //tampilan biasa (bukan form input).

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-500 p-6">
          <h1 className="text-2xl font-bold text-white text-center underline">
            Profil {params.username}
          </h1>
        </div>
        {/* Profile Details */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Welcome, <span className="text-blue-500">{username}</span>!
          </h2>
          <div className="flex flex-col gap-4">
            {/* Username */}
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Username:</span>
              {isEditing ? (
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="text-gray-900 border border-gray-300 rounded py-2 px-3"
                />
              ) : (
                <span className="text-gray-900">{username || "N/A"}</span>
              )}
            </div>
            {/* Email */}
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Email:</span>
              {isEditing ? (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-gray-900 border border-gray-300 rounded py-2 px-3"
                />
              ) : (
                <span className="text-gray-900">{email || "N/A"}</span>
              )}
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="bg-gray-100 p-4 text-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            onClick={() => (isEditing ? saveChanges() : setIsEditing(true))}
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

//class component versi 6 keatas react-router-dom
// class ProfilePage extends React.Component {
//   render() {
//     return (
//       <div className="h-screen flex justify-center items-center">
//         <h1 className="text-3xl font-semibold">Profile Page</h1>
//         <p className="text-xl font-bold flex-col w-screen text-red-500">
//           {this.props.params.username}
//         </p>
//       </div>
//     );
//   }
// }

// export default withParams(ProfilePage);
