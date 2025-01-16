import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getMovies } from "../../lib/apis/server";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FaStar } from "react-icons/fa";

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
              <div key={movie._id} className="h-[480px]">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="font-bold">
                      {movie?.title}{" "}
                      <span className="text-xs font-normal text-neutral-400">
                        {" "}
                        - {movie?.year ?? "N/A"}
                      </span>
                    </CardTitle>
                    <CardDescription className="sr-only">
                      {movie?.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center bg-black w-full h-[225px] mb-4 rounded">
                      <Image
                        src={movie?.poster}
                        alt={movie?.title}
                        width={200}
                        height={400}
                        className="object-contain w-auto h-full"
                        priority="true"
                      />
                    </div>
                    <div className="flex flex-col justify-between h-[154px]">
                      {/* Movie plot */}
                      <p className="text-xs line-clamp-3">{movie?.plot}</p>
                      {/* movie Genres */}
                      <div className="text-sm font-semibold text-blue-700">
                        {movie?.genres?.length && movie?.genres?.join(" / ")}
                      </div>
                      <div
                        className="flex flex-row items-center justify-between"
                        title="IMDb Rating"
                      >
                        <Badge variant="success">
                          Rated: {movie.rated ?? "N/A"}
                        </Badge>
                        <div className="flex flex-row items-center gap-2">
                          <FaStar className="text-yellow-500" />
                          <span className="text-sm font-semibold">
                            {" "}
                            {movie?.imdb?.rating ?? 0}/10
                          </span>
                        </div>
                      </div>
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
