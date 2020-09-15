import React from 'react';

export const ShowActors = ({ cast }) => {
  const urlImg = 'https://image.tmdb.org/t/p/w200';
  return (
    <>
      <h3>Cast</h3>
      <ul>
        {cast.length ? (
          cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`${urlImg}${actor.profile_path}`}
                alt=""
                width="150px"
                height="225px"
              />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          ))
        ) : (
          <li>Can't find actors info</li>
        )}
      </ul>
    </>
  );
};
