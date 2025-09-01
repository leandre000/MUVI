// components/dynamic/Login.tsx
"use client";
import dynamic from "next/dynamic";
import { Loader } from "../ui/loader";

const SignUpPage = dynamic(() => import("@/app/sign-up/page"), {
  loading: () => <> <Loader/> </>,
  ssr: false, // ✅ only load in client
});

export default SignUpPage;
