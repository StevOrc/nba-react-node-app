import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const {totalCount, pageSize, currentPage, onPageChange} = props
    const pagesCount = Math.ceil(totalCount / pageSize);
    if(pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
    return (
        <nav>
            <ul className="pagination">
                {pages.map( page => <li key={page}
                                        className={page === currentPage ? 'page-item active': 'page-item'}
                                        style={{cursor: 'pointer'}}
                                        onClick={() => onPageChange(page)}
                                        >
                                            <a className="page-link">{page}</a>
                                    </li>)}
            </ul>
        </nav>
    );
}
 
export default Pagination;