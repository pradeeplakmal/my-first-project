import Link from "next/link";

export default function SidePanel() {
  return (
    <div className="flex flex-col p-4 space-y-2">
      <Link href="/dashboard" className="p-2 text-sm rounded hover:bg-blue-50">
        Overview
      </Link>
      <Link
        href="/dashboard/movies"
        className="p-2 text-sm rounded hover:bg-blue-50"
      >
        Movies
      </Link>
      <Link
        href="/dashboard/add-movie"
        className="p-2 text-sm rounded hover:bg-blue-50"
      >
        Add Movies
      </Link>
      <Link
        href="/dashboard/users"
        className="p-2 text-sm rounded hover:bg-blue-50"
      >
        Users
      </Link>
      <Link
        href="/dashboard/settings"
        className="p-2 text-sm rounded hover:bg-blue-50"
      >
        Setting
      </Link>
    </div>
  );
}
