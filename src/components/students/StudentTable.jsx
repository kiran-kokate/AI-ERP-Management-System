import { FaEdit, FaTrash } from "react-icons/fa";

function StudentTable() {
  const students = [
    {
      id: 101,
      name: "Rahul Ingale",
      course: "React JS",
      mobile: "9876543210",
      status: "Active",
    },
    {
      id: 102,
      name: "Tejas Jaulkar",
      course: ".NET Core",
      mobile: "9876543211",
      status: "Active",
    },
    {
      id: 103,
      name: "Kiran Jadhav",
      course: "Java Full Stack",
      mobile: "9876543212",
      status: "Pending",
    },
  ];

  const getStatusColor = (status) => {
    if (status === "Active") {
      return "bg-green-100 text-green-700";
    }

    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Roll No</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Course</th>
            <th className="p-4 text-left">Mobile</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="border-b hover:bg-slate-50"
            >
              <td className="p-4">{student.id}</td>
              <td className="p-4">{student.name}</td>
              <td className="p-4">{student.course}</td>
              <td className="p-4">{student.mobile}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                    student.status
                  )}`}
                >
                  {student.status}
                </span>
              </td>

              <td className="p-4">
                <div className="flex justify-center gap-4">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEdit />
                  </button>

                  <button className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;