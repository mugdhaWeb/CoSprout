// frontend/app/components/LoginSuccess.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginSuccess() {
  const router = useRouter();

  useEffect(() => {
    // Redirect after 3 seconds
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Successfully Logged In</h1>
      <p className="text-lg text-gray-700 text-center">
        You have successfully logged in. Redirecting you to your dashboard...
      </p>
    </div>
  );
}
