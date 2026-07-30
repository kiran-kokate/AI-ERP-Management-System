function RecentStudentsTable() {
  const students = [
    {
      id: 1,
      name: "Kiran Kokate",
      course: "Full Stack Development",
      status: "Active",
    },
    {
      id: 2,
      name: "Dnyaneshwar Kokate",
      course: ".NET Core",
      status: "Active",
    },
    {
      id: 3,
      name: "Vaibhav Dumbare",
      course: "Java Full Stack",
      status: "Pending",
    },
    {
      id: 4,
      name: "Ritesh Gadakh",
      course: "MERN Stack",
      status: "Completed",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Completed":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Recent Students
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b">
            <tr className="text-left">
              <th className="py-3">Name</th>
              <th>Course</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-4">{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(
                      student.status
                    )}`}
                  >
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentStudentsTable;