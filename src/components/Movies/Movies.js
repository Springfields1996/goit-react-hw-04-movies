import React from 'react';
import { Nav } from '../Nav/Nav';
import { SearchBar } from '../SearchBar/SearchBar';

export const Movies = props => (
  <>
    <Nav />
    <SearchBar {...props} />
  </>
);
