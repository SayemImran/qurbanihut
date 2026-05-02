"use client";

import Link from "next/link";
import { useSession } from "@/app/lib/auth-client";

const Myprofile = () => {
  const { data, isPending } = useSession();
  const user = data?.user;

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="rounded-3xl border border-gray-200 bg-white/90 p-10 shadow-lg">
          <p className="text-gray-500">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full rounded-3xl border border-gray-200 bg-white/90 p-10 text-center shadow-lg">
          <p className="text-gray-700 mb-6">
            You need to sign in to see your profile.
          </p>
          <Link
            href="/login"
            className="inline-flex rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 transition"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-gray-200 bg-white/95 p-8 shadow-2xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            {user.profileImage ? (
              <img
                src={user.profileImage}
                alt={user.name ?? "User avatar"}
                className="h-28 w-28 rounded-full object-cover shadow-sm"
              />
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-emerald-100 text-4xl font-bold text-emerald-800 shadow-sm">
                {user.name?.charAt(0).toUpperCase() ?? "U"}
              </div>
            )}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700">
                My Profile
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-900">
                {user.name ?? "Unnamed User"}
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                {user.email ?? "No email available"}
              </p>
            </div>
          </div>

          <div className="flex justify-start md:justify-end">
            <Link
              href="/my-profile/update"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-700"
            >
              Update Profile
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-gray-100 bg-slate-50 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Full Name
            </p>
            <p className="mt-3 text-lg font-medium text-slate-900">
              {user.name ?? "-"}
            </p>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-slate-50 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Email Address
            </p>
            <p className="mt-3 text-lg font-medium text-slate-900">
              {user.email ?? "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
