import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import Header from "@/components/Header/Header";
import Navigation from '@/components/Navigation/Navigation'
import Date from '@/components/Date/Date'
import Pagination from '@/components/Pagination/Pagination'
import Select from '@/components/Select/Select'
import Sortselect from "@/components/Sortselect/Sortselect";

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
    }

    return (
        <div>
            <Header />
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={100}
                onChange={handlePageChange}
            />
            </div>
    )
}