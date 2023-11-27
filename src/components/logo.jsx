import Link from "next/link";
import React from "react";

export default function logo() {
  return (
    <Link
      href="/"
      className="flex items-center justify-center h-36 max-lg:-translate-x-12 max-lg:hidden"
    >
      <p className="text-2xl font-bold text-white ">WD</p>
    </Link>
  );
}
