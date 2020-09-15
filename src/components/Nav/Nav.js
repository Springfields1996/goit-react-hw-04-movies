import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  nav__list,
  nav__list_item,
  nav__active_class,
} from '../style.module.css';

export const Nav = () => (
  <ul className={nav__list}>
    <li>
      <NavLink
        exact
        to="/"
        className={nav__list_item}
        activeClassName={nav__active_class}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/movies"
        className={nav__list_item}
        activeClassName={nav__active_class}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);
