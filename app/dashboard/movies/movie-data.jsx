import clientPromise from "@/lib/mongodb";
import MovieTable from "./movie-table";

//Movie data server component
//Server action call directly to mongodb
export default async function MovieData() {
  try {
    const client = await clientPromise();
    const db = client.db("sample_mflix");

    const moviesQuery = await db
      .collection("movies-n")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    if (moviesQuery) {
      //refine movies query toarray
      const refineMovies = moviesQuery.map((movie) => ({
        id: movie._id.toString(),
        title: movie.title,
        year: movie.year,
        plot: movie.plot,
        rated: movie.rated,
        genres: movie.genres,
        poster: movie.poster,
        imdb: movie.imdb,
      }));

      // Pass movies refined data to movies table
      // Return MovieTable
      return <MovieTable movies={refineMovies} />;
    }
  } catch (erroe) {
    console.log(erroe);
    return (
      <div className="flex justify-center items-center h-[186.5px]">
        <p className="font-medium text-red-600 duration-1000 animate-pulse">
          No Movies Available !
        </p>
      </div>
    );
  }

  return <div>MovieData</div>;
}
