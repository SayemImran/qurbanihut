"use client";

import { toast } from "react-toastify";

const AnimalbookForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking confirmed successfully!");
    e.target.reset();
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-white/80 text-sm mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-green-400"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block text-white/80 text-sm mb-2">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-green-400"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-white/80 text-sm mb-2">Phone Number</label>
        <input
          type="tel"
          name="phone"
          required
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-green-400"
          placeholder="Enter phone number"
        />
      </div>
      <div>
        <label className="block text-white/80 text-sm mb-2">Address</label>
        <textarea
          name="address"
          required
          rows="3"
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-green-400"
          placeholder="Enter your address"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors"
      >
        Confirm Booking
      </button>
    </form>
  );
};

export default AnimalbookForm;
