"use client"; // This directive allows useEffect and Context hooks

import { useEffect } from "react";
import { useLoading } from "../context/LoadingContext";
import { setupInterceptors } from "@/app/lib/axios";

export default function ClientInitializer() {
  const { showLoader, hideLoader } = useLoading();

  useEffect(() => {
    setupInterceptors(showLoader, hideLoader);
  }, [showLoader, hideLoader]);

  return null; // This component renders nothing, just runs logic
}
