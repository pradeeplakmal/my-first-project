import { db } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  //Get Movies from the MongoDB
  try {
    // fetch movies from the database
    const movies = await db
      .collection("movies-n")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    return NextResponse.json(movies);
  } catch (error) {
    console.log("MONGODB ERROR", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
