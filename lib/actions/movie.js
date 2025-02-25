"use server";
import { db } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

//Movies related server actions
export const createMovie = async (movie) => {
  try {
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

//Update movie Server Action
export const updateMovie = async (id, movie) => {
  try {
    const result = await db
      .collection("movies-n")
      .updateOne(
        { _id: ObjectId.createFromHexString(id) },
        { $set: movie },
        { upsert: true }
      );

    console.log(`A Movie was updated with the ID: ${result.upsertedId}`);

    if (result.acknowledged) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log("Mongodb update failed", error);
    return { success: false, error };
  }
};

//Delete movie Server Action
export const deleteMovie = async (id) => {
  try {
    const result = await db
      .collection("movies-n")
      .deleteOne({ _id: ObjectId.createFromHexString(id) });

    console.log(`Movie was Deleted: ${result.deletedCount}`);

    if (result.acknowledged) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log("Mongodb delete failed", error);
    return { success: false, error };
  }
};
