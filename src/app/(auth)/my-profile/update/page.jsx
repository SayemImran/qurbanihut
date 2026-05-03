"use client";

import { useState } from "react";
import { authClient, useSession } from "@/app/lib/auth-client";
import Image from "next/image";

const UpdateProfile = () => {
  const { data } = useSession();
  const user = data?.user;

  const [formData, setFormData] = useState({
    name: user?.name || "",
    image: user?.image || "",
  });
  const [imagePreview, setImagePreview] = useState(user?.image || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "image") setImagePreview(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await authClient.updateUser({
      name: formData.name,
      image: formData.image,
    });

    setLoading(false);
    if (error) {
      setMessage("Something went wrong. Please try again.");
    } else {
      setMessage("Profile updated successfully!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Profile Image */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600 ml-1">
            Profile Image Link
          </label>
          <div className="flex items-center gap-3">
            {imagePreview ? (
              <Image
                src={imagePreview}
                alt="Preview"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-400 shrink-0"
                onError={() => setImagePreview("")}
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            )}
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="flex-1 px-4 py-3.5 bg-white/50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-400/50 focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all duration-300"
            />
          </div>
        </div>

        {/* Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600 ml-1">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full pl-12 pr-4 py-3.5 bg-white/50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-400/50 focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all duration-300"
            />
          </div>
        </div>

        {/* Success/Error Message */}
        {message && (
          <p
            className={`text-sm ml-1 ${message.includes("success") ? "text-emerald-600" : "text-red-500"}`}
          >
            {message}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {loading ? "Updating..." : "Update Information"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
