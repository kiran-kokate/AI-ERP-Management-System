import SearchBar from "../../components/students/SearchBar";
import StudentTable from "../../components/students/StudentTable";

function StudentList() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">

      {/* Page Header */}

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800">
          Student Management
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all students from one place.
        </p>
      </div>

      {/* Search Bar */}

      <SearchBar />

      {/* Student Table */}

      <StudentTable />

    </div>
  );
}

export default StudentList;