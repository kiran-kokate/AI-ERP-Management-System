import {
  FaTachometerAlt,
  FaUserGraduate,
  FaBook,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

const menuItems = [
  { icon: <FaTachometerAlt />, name: "Dashboard" },
  { icon: <FaUserGraduate />, name: "Students" },
  { icon: <FaBook />, name: "Courses" },
  { icon: <FaClipboardCheck />, name: "Attendance" },
  { icon: <FaMoneyBillWave />, name: "Fees" },
  { icon: <FaChartBar />, name: "Reports" },
  { icon: <FaCog />, name: "Settings" },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0">
      <div className="text-center py-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-blue-400">
          AI ERP
        </h1>

        <p className="text-xs text-slate-400 mt-1">
          Management System
        </p>
      </div>

      <ul className="mt-6">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 px-6 py-4 hover:bg-blue-600 cursor-pointer transition-all duration-300"
          >
            <span className="text-lg">{item.icon}</span>

            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;