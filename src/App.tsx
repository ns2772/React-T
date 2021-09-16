import React from "react";
import { useQuery } from "react-query";
import "./App.styles.scss";
export interface MovieFromAPI {
  title: string;
  release_year: number;
  locations: string;
  fun_facts: string;
  production_company: string;
  distributor: string;
  director: string;
  writer: string;
  actor_1: string;
  actor_2: string;
  actor_3: string;
}

export interface Movie
  extends Omit<MovieFromAPI, "actor_1" | "actor_2" | "actor_3" | "locations"> {
  locations: string[];
  actors: string[];
}

const App: React.FC = () => {
  const [movieList, setMovieList] = React.useState<Array<Movie>>([]);

  const { isLoading } = useQuery<Array<MovieFromAPI>>(
    "movies",
    async () => {
      // https://dev.socrata.com/foundry/data.sfgov.org/yitu-d5am
      const response = await fetch(
        "https://data.sfgov.org/resource/yitu-d5am.json?$limit=100",
        {
          headers: { "X-App-Token": "BOEjdyaAE7igQWstbEO1Nc72T" },
        }
      );

      return response.ok
        ? response.json()
        : Promise.reject(response.statusText);
    },
    {
      onError: (error) => {},
      onSuccess: (data) => {
        const movies: Array<Movie> = data.reduce((movies, movie) => {
          const isFirst = !movies.length;
          const newMovie = {
            ...movie,
            actors: [movie.actor_1, movie.actor_2, movie.actor_3].filter(
              Boolean
            ),
            locations: [movie.locations].filter(Boolean),
          };

          if (isFirst) return [newMovie];

          const oldMovie = movies.filter((m) => m.title === movie.title)[0];

          if (oldMovie) {
            const otherMovies = movies.filter((m) => m.title !== movie.title);

            return [
              ...otherMovies,
              {
                ...oldMovie,
                locations: [
                  ...oldMovie.locations,
                  ...(oldMovie.locations.includes(movie.locations)
                    ? []
                    : [movie.locations]),
                ].filter(Boolean),
              },
            ];
          }

          return [...movies, newMovie];
        }, [] as Array<Movie>);

        setMovieList(movies);
      },
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  return (
    <div className="page">
      <div className="page__filters filters">Filters could go here</div>

      <div className="page__results results">
        {movieList &&
          movieList.map((movie) => (
            <section className="movie" key={movie.title}>
              <h1 className="movie__title">
                {movie.title}
                <span className="movie__release-year">
                  {movie.release_year}
                </span>
              </h1>

              <p className="movie__section movie__actors">
                <span className="movie__section-title movie__actors-title">
                  Actors:
                </span>

                <ol className="movie__section-list movie__actors-list">
                  {movie.actors.filter(Boolean).map((actor) => (
                    <li
                      className="movie__section-list-item movie__actors-list-item"
                      key={actor}
                    >
                      {actor}
                    </li>
                  ))}
                </ol>
              </p>

              {!!movie.locations.length && (
                <p className="movie__section movie__locations">
                  <span className="movie__section-title movie__locations-title">
                    Locations:
                  </span>

                  <ul className="movie__section-list movie__locations-list">
                    {movie.locations.map((location) => (
                      <li
                        className="movie__section-list-item movie__locations-list-item"
                        key={location}
                      >
                        {location}
                      </li>
                    ))}
                  </ul>
                </p>
              )}

              {!!movie.fun_facts && (
                <p className="movie__fun-facts">{movie.fun_facts}</p>
              )}
            </section>
          ))}
      </div>
    </div>
  );
};

export default App;
