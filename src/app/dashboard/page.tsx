"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, isPending, error } = authClient.useSession();

  useEffect(() => {
    if (!isPending && (!session || error)) {
      router.replace("/login");
    }
  }, [session, error, isPending, router]);

  if (isPending) return <div className="flex min-h-screen items-center justify-center">Loading...</div>;
  if (!session) return null;

  const { user } = session;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center">Dashboard</h2>
        <div className="space-y-2">
          <div><span className="font-medium">Name:</span> {user.name}</div>
          <div><span className="font-medium">Email:</span> {user.email}</div>
        </div>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          onClick={async () => {
            await authClient.signOut();
            router.replace("/login");
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
} 