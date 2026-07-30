import DashboardCards from "../../components/dashboard/DashboardCards";
import RevenueChart from "../../components/dashboard/RevenueChart";
import RecentStudentsTable from "../../components/dashboard/RecentStudentsTable";
import StudentPerformanceChart from "../../components/dashboard/StudentPerformanceChart";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Welcome Back ritesh don👋
        </h1>

        <p className="text-gray-500 mt-2">
          AI ERP Management Dashboard
        </p>
      </div>

      <DashboardCards />

   <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
  <RevenueChart />
  <StudentPerformanceChart />
</div>
      <div className="mt-8">
  <RecentStudentsTable />
</div>
    </div>
  );
}

export default Dashboard;