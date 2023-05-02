import React from 'react';
import styles from './Pagination.module.css'
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import { useState } from "react";

const MyPagination = () => {
    const [page, setPage] = useState(1)
    return (
        <div className={styles.PaginationWrapper}>
            <span className={styles.Pages}>{page} of 10</span>
            <Pagination
                current={page}
                total={100} // set the total number of items to 100
                responsive // make the pagination component responsive
                onChange={setPage}
            />
        </div>
    );
}
export default MyPagination
