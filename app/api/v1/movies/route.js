import { NextResponse } from "next/server";

const MOVIES = [
  { id: 1, title: "Harry Porter 1" },
  { id: 2, title: "Harry Porter 2" },
  { id: 3, title: "Harry Porter 3" },
  { id: 4, title: "Harry Porter 4" },
  { id: 5, title: "Harry Porter 5" },
  { id: 6, title: "Harry Porter 6" },
  { id: 7, title: "Harry Porter 7" },
  { id: 8, title: "Harry Porter 8" },
];

export const GET = async (req) => {
  return NextResponse.json({ success: true, movies: MOVIES });
};
