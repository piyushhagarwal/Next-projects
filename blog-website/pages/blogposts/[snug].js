import React from "react";
import { useRouter } from "next/router";

export default function Snug() {
  const router = useRouter();
  const { snug } = router.query;
  return <div>{snug}</div>;
}
