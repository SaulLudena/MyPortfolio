import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
export default function logo() {
  const text_1 = "WD";
  return (
    <Link
      href="/"
      className="flex items-center justify-center h-36 max-lg:-translate-x-12 max-lg:hidden"
    >
      <p className="text-2xl font-bold text-white ">
        {text_1.split("").map((letra, index) => (
          <motion.span
            key={index}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
          >
            {letra}
          </motion.span>
        ))}
      </p>
    </Link>
  );
}
