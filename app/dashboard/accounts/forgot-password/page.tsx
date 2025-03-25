import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white shadow-sm">
        <div className="text-blue-600 font-bold font-sans text-3xl">
          facebook
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Email or phone"
            className="border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
            Log in
          </button>
          <a href="#" className="text-blue-600 text-sm hover:underline">
            Forgotten account?
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Find Your Account</h2>
          <p className="text-gray-600 mb-4">
            Please enter your email address or mobile number to search for your
            account.
          </p>
          <input
            type="text"
            placeholder="Email address or mobile number"
            className="w-full border rounded-md p-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-end space-x-2">
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-100">
              Cancel
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
