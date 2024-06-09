// components/withAdminAuth.js

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function withAdminAuth(WrappedComponent) {
  return function AdminAuth(props) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "unauthenticated") {
        signIn(); // Redirect to login page if not authenticated
      } else if (session && session.user.role !== "admin") {
        router.push("/"); // Redirect to home if not admin
      }
    }, [status, session, router]);

    if (status === "loading" || (session && session.user.role !== "admin")) {
      return <div>Loading...</div>; // Show loading while checking auth status
    }

    return <WrappedComponent {...props} />;
  };
}
