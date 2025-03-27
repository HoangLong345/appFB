import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <br></br>
      <div className="w-full items-center justify-center flex">
        <div className=" text-blue-600 font-bold font-sans text-6xl w-70 h-25">
          <p>facebook</p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md ">
          <div>
            <h2 className="text-2xl font-extrabold mb-4 text-black font-sans items-center justify-center flex">
              Create a new account
            </h2>
            <p className=" font-bold text-gray-600 mr-2 justify-center flex">
              It's quick and easy.
            </p>
          </div>
          <hr className="border-black-300 my-4" />
          <div>
            <input
              type="text"
              placeholder="First name"
              className="w-full border rounded-md p-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full border rounded-md p-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Mobile number or email"
              className="w-full border rounded-md p-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="New password"
              className="w-full border rounded-md p-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              placeholder="Date of birth"
              className="w-full border rounded-md p-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
