import React from "react";
import _ from "lodash";

const Pagination = ({
  currentPage,
  pageSize,
  totalItemsCount,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            style={{ cursor: "pointer" }}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <div onClick={() => onPageChange(page)} className="page-link">
              {page}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
