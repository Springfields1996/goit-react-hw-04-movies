import React from 'react';

export const ShowReview = ({ review }) => (
  <>
    <h3>Reviews:</h3>
    <ul>
      {review.length ? (
        review.map(el => (
          <li key={el.id}>
            {el.content}
            <p>{el.author}</p>
          </li>
        ))
      ) : (
        <li>Sorry, we can't find reviews</li>
      )}
    </ul>
  </>
);
