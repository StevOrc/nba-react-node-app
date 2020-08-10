import _ from "lodash";

export const paginate = (items, pageSize, currentPage) => {
  const startIndex = (currentPage - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};
