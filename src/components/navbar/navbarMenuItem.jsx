import Link from "next/link";
export default function SidenavItem({ route, label }) {
  return (
    <li>
      <Link href={route} className="relative grid gap-1 px-6 py-5 group ">
        <span className="transition duration-200 opacity-40 group-hover:opacity-100 text-md">
          {label}
        </span>
        <div className="absolute flex justify-center bottom-3 left-1/2">
          <div className="w-1 h-1 transition duration-200 rounded-full group-hover:bg-white "></div>
        </div>
      </Link>
    </li>
  );
}
