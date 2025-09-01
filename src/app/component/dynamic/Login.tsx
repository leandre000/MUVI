// components/dynamic/Login.tsx
"use client";
import dynamic from "next/dynamic";
import { Loader } from "../ui/loader";

const LoginPage = dynamic(() => import("@/app/login/page"), {
  loading: () => <> <Loader/> </>,
  ssr: false, // ✅ only load in client
});

export default LoginPage;
