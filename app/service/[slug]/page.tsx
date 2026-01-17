"use client";
import { useParams } from "next/navigation";
import PageClient from "./PageClient";

export default function PostPage() {
  const { slug } = useParams();
  //   return <div>Slug: {slug}</div>;

  return <PageClient page={slug as string} />;
}
