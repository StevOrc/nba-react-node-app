import React from "react";
import { TableBody, TableHeader, ListGroup, Pagination } from "../../common";

const Table = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={props.filterItems}
            selectedItem={props.selectedFilterItem}
            onFilter={props.onFilterItem}
          />
        </div>
        <div className="col-8">
          <table className="table">
            <TableHeader
              columns={props.columns}
              onSort={props.onSort}
              sortColumn={props.sortColumn}
            />
            <TableBody data={props.data} columns={props.columns} />
          </table>
          <Pagination
            currentPage={props.currentPage}
            pageSize={props.pageSize}
            totalItemsCount={props.totalItemsCount}
            onPageChange={props.onPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
