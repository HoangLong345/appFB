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
      <div className="p-4">
        <div className="text-blue-600 font-bold font-sans text-6xl w-64 h-20">
          <p>facebook</p>
        </div>
        <p className="text-black font-blodblod font-sans text-3xl">
          Facebook helps you connect and share <br></br> with the people in your
          life.
        </p>
      </div>{" "}
      <br></br>
      <div className=" flex flex-col p-4 mt-4">
        <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email address or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-blackblack-500 rounded font-sans placeholder:font-sans placeholder:text-gray-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-black-500 rounded font-sans placeholder:font-sans placeholder:text-gray-400"
              required
            />
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-sasn p-2 rounded-md"
            >
              Log in
            </button>
            <div className="w-full items-center justify-center flex">
              <button
                type="submit"
                className="w-auto text-blue-600 font-sans p-2"
                onClick={() =>
                  router.push("/dashboard/accounts/forgot-password")
                }
              >
                Forgotten password?
              </button>
            </div>
            <hr className="border-black-300 my-4" />

            <div className="w-full items-center justify-center flex">
              <button
                type="submit"
                className="w-auto bg-green-600 text-white font-sans p-2 rounded-md"
                onClick={() =>
                  router.push("/dashboard/accounts/create-account")
                }
              >
                Create new account
              </button>
            </div>
          </form>
        </div>
        <br></br>
        <div>
          <p className="flex items-center justify-center text-black text-sm">
            <span className="font-extrabold">
              <a
                href="https://www.facebook.com/pages/create/?ref_type=registration_form"
                className="mr-2"
              >
                Create a Page
              </a>
            </span>
            for a celebrity, brand or business.
          </p>
        </div>
      </div>
    </div>
  );
}
