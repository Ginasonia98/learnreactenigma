import SignUpPage from "./components/pages/SignUpPage";
import SignInPage from "./components/pages/SignInPage";
import WishlistPage from "./components/pages/WishlistPage";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./components/pages/ProfilePage";
import DashboardPage from "./components/pages/DashboardPage";
import CounterPage from "./components/pages/CounterPage";
import ActivitiesPage from "./components/pages/ActivitiesPage";

// import { Toaster } from "sonner";
// import ToDoApp from "./components/TodoApp";
// import EventCard from "./components/EventCard";
// import { withTimeStamp } from "./hoc/withTimeStamp";
// import TodoCard from "./components/TodoCard";
// import Footer from "./components/Footer";
// import TimeDisplay from "./components/TimeDisplay";

function App() {
  // const TimeDisplayWithTimeStamp = withTimeStamp(TimeDisplay);

  return (
    <>
      {/* <Toaster position="top-left" /> */}
      <Routes>
        {/* Tujuan path ketika masuk url tujuan akan menampilkan element */}
        {/* Definisikan route untuk halaman SignUp */}
        <Route path="/sign-up" element={<SignUpPage />} />
        {/* Definisikan route untuk halaman SignIn */}
        <Route path="/sign-in" element={<SignInPage />} />
        {/* Definisikan route untuk halaman Wishlist */}
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/dashboard/:username" element={<DashboardPage />} />
        <Route path="/" element={<CounterPage />} />
        <Route path="/activity" element={<ActivitiesPage />} />
      </Routes>
    </>
  );

  // return (
  //   <>
  //     <main className="flex items-center justify-center min-h-screen p-4">
  //       <div className="text-center">
  //         {/* <TodoCard day="Tuesday" numberOfActivities={5} /> */}
  //         {/* <ToDoApp/> */}
  //         {/* <hr className="my-4" /> */}

  //         {/* Contoh penggunaan EventCard */}
  //         {/* <EventCard
  //         eventName="React Workshop"
  //         eventDate="2025-01-15"
  //         isFree={true}
  //       />
  //       <br />
  //       <EventCard
  //         eventName="Vue.js Conference"
  //         eventDate="2025-02-10"
  //         isFree={false}
  //       /> */}
  //       </div>
  //     </main>
  //     <div className="flex items-center justify-center text-center">
  //       <div>
  //         <h1 className="text-2xl font-bold mb-4">
  //           Welcome to the Time Display App
  //         </h1>
  //         {/* <TimeDisplayWithTimeStamp /> */}
  //       </div>
  //     </div>
  //     <br />
  //     {/* <Footer message="Hello footer" /> */}
  //   </>
  // );
}

export default App;
