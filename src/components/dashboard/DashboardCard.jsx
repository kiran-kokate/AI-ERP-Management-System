import { motion } from "framer-motion";

function DashboardCard({
  title,
  value,
  icon,
  color,
  growth,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-md p-6 transition-all"
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

          <p className="text-green-600 text-sm mt-2">
            ▲ {growth}% this month
          </p>
        </div>

        <div
          className={`w-16 h-16 rounded-xl flex items-center justify-center text-white text-3xl ${color}`}
        >
          {icon}
        </div>
      </div>
    </motion.div>
  );
}

export default DashboardCard;