"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake authentication logic
    if (email === "admin@example.com" && password === "password") {
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-blue-500 font-bold text-3xl w-64 h-20">
        <p>facebook</p>
        <p className="text-black font-bold text-xl">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>

      <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded font-bold"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Login
          </button>
          <div className="w-full items-center justify-center flex">
            <button
              type="submit"
              className="w-auto text-blue-500 p-2"
              onClick={() => router.push("/dashboard/accounts/forgot-password")}
            >
              Forgotten Password
            </button>
          </div>
          <div className="w-full items-center justify-center flex">
            <button
              type="submit"
              className="w-auto bg-green-500 text-white p-2 rounded-md"
              onClick={() => router.push("/dashboard/accounts/create-account")}
            >
              Create New Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
