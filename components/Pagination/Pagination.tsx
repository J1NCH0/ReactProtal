import React from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

const MyPagination = () => {

    return (
        // <Pagination
        //     current={1} // set the current page to 1
        //     total={total} // set the total number of items to 100
        //     pageSize={pageSize} // set the page size to 10 items per page
        //     onChange={handlePageChange} // handle page change event
        //     itemRender={itemRender} // customize pagination item rendering
        // />

        <Pagination defaultCurrent={1} total={50} responsive />
    );
}
export default MyPagination