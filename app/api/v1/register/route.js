import { NextResponse } from "next/server";
import clientPromise from "@/app/libs/apis/mongodb";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json();

    //backend validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email and password are required..." },
        { status: 400 }
      );
    }
    const client = await clientPromise();
    //sample_mflix is the database name
    const db = client.db("sample_mflix");

    //db eka user kenek innawada kiyala mail eken check karanawa.
    const existingUser = await db.collection("users").findOne({ email });

    //console.log("Is existing user", existingUser);
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists..." },
        { status: 409 }
      );
    }

    //Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    //console.log("Hashed Password", hashedPassword);

    //Insert User
    const result = await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      createAt: new Date(),
    });

    if (result && result.acknowledged) {
      //console.log("MDB Resul", result);
      return NextResponse.json({
        success: true,
        user: {
          userID: result.insertedId,
          name,
          email,
        },
      });
    } else {
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.log("MONGODB ERROR", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
