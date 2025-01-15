import { lazy, Suspense } from "react";
import SignUpPage from "./components/pages/SignUpPage";
import SignInPage from "./components/pages/SignInPage";
import WishlistPage from "./components/pages/WishlistPage";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./components/pages/ProfilePage";
import ActivitiesPage from "./components/pages/ActivitiesPage";
import { SignInContextProvider } from "./context/SignInContext";
import EventCardPage from "./components/pages/EventCardPage";

// import { Toaster } from "sonner";
// import ToDoApp from "./components/TodoApp";
// import { withTimeStamp } from "./hoc/withTimeStamp";
// import TodoCard from "./components/TodoCard";
// import Footer from "./components/Footer";
// import TimeDisplay from "./components/TimeDisplay";

const CounterPage = lazy(() => import("./components/pages/CounterPage"));
const DashboardPage = lazy(() => import("./components/pages/DashboardPage"));

function App() {
  // const TimeDisplayWithTimeStamp = withTimeStamp(TimeDisplay);

  return (
    <>
      {/* <Toaster position="top-left" /> */}
      <SignInContextProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route
            path="/dashboard/:username"
            element={
              <Suspense fallback={<p>Loading Dashboard...</p>}>
                <DashboardPage />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={<p>Loading Counter Page...</p>}>
                <CounterPage />
              </Suspense>
            }
          />
          <Route path="/activity" element={<ActivitiesPage />} />
          <Route path="/event-page" element={<EventCardPage />} />
        </Routes>
      </SignInContextProvider>
    </>
  );

  // return (
  //   <>
  //     <main className="flex items-center justify-center min-h-screen p-4">
  //       <div className="text-center">
  //         {/* <TodoCard day="Tuesday" numberOfActivities={5} /> */}
  //         {/* <ToDoApp/> */}
  //         {/* <hr className="my-4" /> */}

  //       <br />
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
