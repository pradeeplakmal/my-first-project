"use server";
import clientPromise from "@/lib/mongodb";

//Movies related server actions
export const createMovie = async (movie) => {
  try {
    const client = await clientPromise(); // Mongo client
    const db = client.db("sample_mflix"); // Database instance

    const result = await db.collection("movies-n").insertOne(movie);

    console.log(`A Movie was inserted with the ID: ${result.insertedId}`);

    if (result.acknowledged) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log("Mongodb insert failed", error);
    return { success: false, error };
  }
};
