/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../lib/axios";
import { toast } from "sonner";

const DashboardPage = () => {
  const params = useParams();
  const [statsList, setStatsList] = useState([]); // Mengubah ke array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(false); // Error state

  const fetchStats = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axiosInstance.get("/dashboard-sales");
      if (response.data) {
        setStatsList(response.data); // Mengatur semua data dari respons
      }
    } catch (err) {
      toast.error("Failed to fetch dashboard stats. Please try again.");
      console.error("Error fetching dashboard stats:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (loading) {
    return <p>Loading Dashboard...</p>;
  }

  if (error) {
    return (
      <p className="text-red-600">
        Unable to fetch data. Please try again later.
      </p>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-6">
          Welcome to Dashboard, {params.username}!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsList.map((stats, index) => (
            <div key={index} className="flex flex-col">
              <StatCard
                title="Total Users"
                value={stats.totalUsers}
                color="blue"
              />
              <StatCard
                title="Sales"
                value={stats.sales}
                color="green"
              />
              <StatCard
                title="Pending Orders"
                value={stats.pendingOrders}
                color="red"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer message="Footer content goes here." />
    </div>
  );
};

const StatCard = ({ title, value, color }) => (
  <div
    className={`bg-white p-6 rounded-lg shadow-lg border-l-4 border-${color}-500`}
  >
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className={`text-4xl font-bold text-${color}-600`}>{value}</p>
  </div>
);

export default DashboardPage;

