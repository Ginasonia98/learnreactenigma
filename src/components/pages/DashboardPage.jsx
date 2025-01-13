/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../lib/axios";
import { toast } from "sonner";

const DashboardPage = () => {
  const params = useParams();
  const [stats, setStats] = useState({
    totalUsers: 0,
    sales: 0,
    pendingOrders: 0,
  });

  // Fetch stats data from the API
  const fetchStats = async () => {
    try {
      // Perbaiki endpoint ke "/dashboard-sales" sesuai dengan yang ada di db.json
      const response = await axiosInstance.get("/dashboard-sales");
      if (response.data) {
        setStats(response.data[0]); // Ambil data pertama dari array response
      }
    } catch (error) {
      toast.error("Failed to fetch dashboard stats. Please try again.");
      console.error("Error fetching dashboard stats:", error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []); // Dependency array kosong

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-6">
          Welcome to Dashboard, {params.username}!
        </h1>
        {stats.totalUsers === 0 &&
        stats.sales === 0 &&
        stats.pendingOrders === 0 ? (
          <p className="text-red-600">
            Unable to fetch data. Please try again later.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Total Users</h3>
              <p className="text-4xl font-bold text-blue-600">
                {stats.totalUsers}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Sales</h3>
              <p className="text-4xl font-bold text-green-600">
                {stats.sales.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Pending Orders</h3>
              <p className="text-4xl font-bold text-red-600">
                {stats.pendingOrders}
              </p>
            </div>
          </div>
        )}
      </div>

      <Footer message="Footer content goes here." />
    </div>
  );
};

export default DashboardPage;
