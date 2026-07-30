import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-slate-800">
          AI ERP Login
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Sign in to continue
        </p>

        <form className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">
              Username
            </label>

            <div className="flex items-center border rounded-lg px-3">
              <FaUser className="text-gray-400" />

              <input
                type="text"
                placeholder="Enter username"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <div className="flex items-center border rounded-lg px-3">
              <FaLock className="text-gray-400" />

              <input
                type="password"
                placeholder="Enter password"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          <button
  type="button"
  onClick={() => navigate("/dashboard")}
  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
>
  Login
</button>
        </form>
      </div>
    </div>
  );
}

export default Login;