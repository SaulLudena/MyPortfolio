import Link from "next/link";
import { useRouter } from "next/router";
export default function SidenavItem({ icon, route, label, rounded }) {
  const router = useRouter();
  return (
    <Link
      href={route}
      className={`max-lg:h-28 h-20  max-lg:w-[33.3%] hover:bg-[#00FFB2] transition duration-200 group  bg-[#0C0C0C] ${rounded} `}
    >
      <div className="grid items-center justify-center h-full group">
        {icon}
        <p className="font-medium transition duration-300 -translate-y-10 opacity-0 group group-hover:-translate-y-1 max-lg:group-hover:-translate-y-3 group-hover:opacity-100 text-zinc-900">
          {label}
        </p>
      </div>
    </Link>
  );
}
