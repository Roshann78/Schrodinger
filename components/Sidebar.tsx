import { resume } from "@/data/resume";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-full md:w-[220px] md:fixed md:top-0 md:left-0 md:h-screen md:overflow-y-auto border-b border-gray-200 dark:border-gray-800 md:border-b-0 md:border-r p-6 md:p-8 bg-white dark:bg-[#030712] z-10">
      <h2 className="text-xl font-bold mb-6 tracking-tight">Resources</h2>
      <ul className="flex flex-col gap-4">
        {resume.resources.map((res, i) => (
          <li key={i}>
            <Link
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:underline transition-colors font-medium"
            >
              {res.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
