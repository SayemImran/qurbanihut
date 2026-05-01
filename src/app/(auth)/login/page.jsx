import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center py-12 px-4">
      <div className="fixed inset-0 bg-gray-50 -z-10"></div>
      <div className="backdrop-blur-lg bg-white/80 border border-gray-200 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20">
            <Image
              src="/assets/logo.svg"
              alt="QurbaniHut Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Sign in to continue to QurbaniHut
        </p>

        {/* form data here */}
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm mb-2">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-2">Password</label>
            <input
              name="password"
              type="password"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="flex flex-col gap-3 items-center justify-center">
          <div>
            <p className="text-center text-gray-600 mt-6">
              Don`&apos;`t have an account?{" "}
              <Link
                href="/register"
                className="text-green-600 font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
          <div>
            <p className="flex gap-3 items-center text-green-600 border border-green-600 rounded-xl px-4 py-2 mt-4 cursor-pointer hover:bg-green-600 hover:text-white transition-colors">
              <FaGoogle /> login with Google
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
