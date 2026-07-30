import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Dashboard from "../pages/Dashboard/Dashboard";

function MainLayout() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full bg-slate-100 min-h-screen">
        <Navbar />

        <Dashboard />
      </div>
    </div>
  );
}

export default MainLayout;