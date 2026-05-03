"use client";

import Link from "next/link";
import { useSession } from "@/app/lib/auth-client";
import Image from "next/image";

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
    <div className="min-h-[30vh] md:min-h-[50vh] lg:min-h-[70vh] bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-gray-200 bg-white/95 shadow-2xl">
        <div className="grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-6">
            <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full bg-emerald-100 shadow-sm sm:h-28 sm:w-28">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name ?? "User avatar"}
                  fill
                  className="rounded-full object-cover"
                />
              ) : (
                <span className="text-3xl font-bold text-emerald-800 sm:text-4xl">
                  {user.name?.charAt(0).toUpperCase() ?? "U"}
                </span>
              )}
            </div>

            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-700 sm:text-sm">
                My Profile
              </p>
              <h1 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                {user.name ?? "Unnamed User"}
              </h1>
              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                {user.email ?? "No email available"}
              </p>
            </div>
          </div>

          <div className="flex justify-start lg:justify-end">
            <Link
              href="/my-profile/update"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-700 sm:px-6 sm:text-base"
            >
              Update Profile
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 bg-slate-50 px-5 py-6 sm:px-8 sm:py-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Full Name
              </p>
              <p className="mt-3 text-lg font-medium text-slate-900">
                {user.name ?? "-"}
              </p>
            </div>
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
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
    </div>
  );
};

export default Myprofile;
