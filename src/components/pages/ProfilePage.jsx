/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// import React from "react";
import { useParams } from "react-router-dom";
// import { withParams } from "../../hoc/withParams";

//functional component
const ProfilePage = () => {
  const params = useParams();

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
            Welcome, <span className="text-blue-500">{params.username}</span>!
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Username:</span>
              <span className="text-gray-900">{params.username || "N/A"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Email:</span>
              <span className="text-gray-900">{params.username}@gmail.com</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Joined:</span>
              <input
                type="date"
                className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="bg-gray-100 p-4 text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Edit Profile
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
