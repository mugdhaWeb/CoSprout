// frontend/app/components/VerificationSent.tsx
"use client";

import Link from "next/link";

export default function VerificationSent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Verification Email Sent</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Please check your email to verify your account.
      </p>
      <Link href="/apply" className="text-green-600 hover:text-green-800 underline">
        Back to Login
      </Link>
    </div>
  );
}
