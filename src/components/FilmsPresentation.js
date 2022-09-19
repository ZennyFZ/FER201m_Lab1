import React from "react";
export default function Film({films}) {
  return (
    <div className="container">
      {films.map((film) => (
        <div className="column">
          <div className="movie">
            <img src={film.img} />
            <h3>{film.title}</h3>
            <p>Year: {film.year}</p>
            <p>Nation: {film.nation}</p>
          </div>
        </div>
      ))}
    </div>
  );
}