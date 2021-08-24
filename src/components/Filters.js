import React from "react";
import FilterLink from "./FilterLink";
import { todolistFilters } from "../actions";
import "./todo.css";
const Filters = () => {
  return (
    <div className="FilterLink">
      <span>Show:</span>
      <FilterLink className="link" filter={todolistFilters.SHOW_ALL}>
        All
      </FilterLink>
      <FilterLink className="link" filter={todolistFilters.SHOW_ACTIVE}>
        Active
      </FilterLink>
      <FilterLink className="link" filter={todolistFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </div>
  );
};

export default Filters;
