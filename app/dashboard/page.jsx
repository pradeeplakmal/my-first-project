import { getMovies } from "../libs/apis/server";

export default async function DashboardPage() {
  //1. Add shadcn card
  //2. Create Movies GET endpoint
  //3. Read the dummy response
  //4. Render data set in the UI

  const { movies } = await getMovies();

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
          {movies?.length &&
            movies.map((movie) => (
              <div key={movie.id} className="bg-green-500 h-96">
                {movie?.title}
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
