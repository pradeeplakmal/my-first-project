"use client";
import Link from "next/link";
import {
  Settings,
  LayoutDashboard,
  Clapperboard,
  PlusCircle,
  Users,
} from "lucide-react";

export default function SidePanel() {
  return (
    <div className="flex flex-col p-4 space-y-2">
      <Link
        href="/dashboard"
        className="flex p-2 text-sm rounded hover:bg-blue-50"
      >
        {<LayoutDashboard className="text-blue-400 h-4 w-4 mr-2" />}
        Overview
      </Link>
      <Link
        href="/dashboard/movies"
        className="flex p-2 text-sm rounded hover:bg-blue-50"
      >
        {<Clapperboard className="text-blue-400 h-4 w-4 mr-2" />}
        Movies
      </Link>
      <Link
        href="/dashboard/add-movie"
        className="flex p-2 text-sm rounded hover:bg-blue-50"
      >
        {<PlusCircle className="text-blue-400 h-4 w-4 mr-2" />}
        Add Movies
      </Link>
      <Link
        href="/dashboard/users"
        className="flex p-2 text-sm rounded hover:bg-blue-50"
      >
        {<Users className="text-blue-400 h-4 w-4 mr-2" />}
        Users
      </Link>

      <Link
        href="/dashboard/settings"
        className="flex p-2 text-sm rounded hover:bg-blue-50"
      >
        {<Settings className="text-blue-400 h-4 w-4 mr-2" />}
        Setting
      </Link>
    </div>
  );
}
