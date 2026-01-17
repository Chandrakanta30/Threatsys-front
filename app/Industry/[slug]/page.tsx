"use client";
import PageClient from "./PageClient";

export default function IndustryPage({ params }: { params: { slug: string } }) {
  return <PageClient page={params.slug} />;
}
// "use client";
// import { useParams } from "next/navigation";

// export default function PostPage() {
//   const { slug } = useParams();
//   //   return <div>Slug: {slug}</div>;

//   return <PageClient page={slug as string} />;
// }
