"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useAuthContext } from "@/context/AuthContext";

export default function AdminPage() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, [router, user]);

  return (
    <div>
      <h1>Admin Page</h1>
    </div>
  );
}
