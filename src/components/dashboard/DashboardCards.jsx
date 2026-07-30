import {
  FaUserGraduate,
  FaBook,
  FaMoneyBillWave,
  FaClipboardCheck,
} from "react-icons/fa";

import DashboardCard from "./DashboardCard";

function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <DashboardCard
        title="Students"
        value="1250"
        icon={<FaUserGraduate />}
        color="bg-blue-600"
        growth="18"
      />

      <DashboardCard
        title="Courses"
        value="32"
        icon={<FaBook />}
        color="bg-purple-600"
        growth="12"
      />

      <DashboardCard
        title="Revenue"
        value="₹18.5L"
        icon={<FaMoneyBillWave />}
        color="bg-green-600"
        growth="24"
      />

      <DashboardCard
        title="Attendance"
        value="95%"
        icon={<FaClipboardCheck />}
        color="bg-orange-500"
        growth="8"
      />

    </div>
  );
}

export default DashboardCards;