import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded font-bold"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
