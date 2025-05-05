import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center">Welcome</h1>
        <Link href="/register" className="w-full">
          <button className="w-full py-2 px-4 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Register</button>
        </Link>
        <Link href="/login" className="w-full">
          <button className="w-full py-2 px-4 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Login</button>
        </Link>
        <div className="text-center text-sm text-gray-500 mt-4">
          After registering, check your email for a verification link.<br />
          You must verify your email before logging in.
        </div>
      </div>
    </div>
  );
}
