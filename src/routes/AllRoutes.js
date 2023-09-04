import { Routes, Route} from "react-router-dom";
import {MovieList, MovieDetail, Search, PageNotFound} from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
        <Routes>
              <Route path="/" element={ <MovieList /> } />
              <Route path="/movie/:id" element={ <MovieDetail /> } />
              <Route path="movieSearch" element={ <Search /> } />
              <Route path="/movie/top" element={ <MovieList /> } />
              <Route path="/movie/popular" element={ <MovieList /> } />
              <Route path="/movie/upcoming" element={ <MovieList /> } />
              <Route path="*" element={ <PageNotFound /> } />
        </Routes>
    </div>
  )
}
