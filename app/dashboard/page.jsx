import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getMovies } from "../libs/apis/server";
import Image from "next/image";

export default async function DashboardPage() {
  //1. Add shadcn card
  //2. Create Movies GET endpoint
  //3. Read the dummy response
  //4. Render data set in the UI

  const moviesQuery = await getMovies();

  console.log("Mflix Movies", moviesQuery);

  return (
    <main>
      {/* Navigation bar */}
      <nav className="flex items-center justify-start w-full h-16 bg-blue-400">
        <div className="container">
          <h1 className="text-xl font-bold text-black">Mflix Dashboard</h1>
        </div>
      </nav>

      {/* Body section */}
      <div className="container mt-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {moviesQuery?.length &&
            moviesQuery.map((movie) => (
              <div key={movie._id} className="h-96">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="font-bold text-center">
                      {movie?.title}
                    </CardTitle>
                    <CardDescription className="sr-only">
                      {movie?.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center bg-black w-full h-[276px] mb-4 rounded">
                      <Image
                        src={movie?.poster}
                        alt={movie?.title}
                        width={200}
                        height={400}
                        className="object-contain w-auto h-full"
                      />
                    </div>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
