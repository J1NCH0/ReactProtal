import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import Header from "@/components/Header/Header";
import Navigation from '@/components/Navigation/Navigation'
import Date from '@/components/Date/Date'
import Pagination from '@/components/Pagination/Pagination'
import Select from '@/components/Select/Select'
import Sortselect from "@/components/Sortselect/Sortselect";
import CourseCard from "@/components/CourseCard/CourseCard";
import image from '../public/assets/icons/adobeilustrasorback.svg'

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [info, setInfo] = useState([
        {
            title: 'HTML',
            caption: '8 ტოპიკი',
            src: 'assets/icons/htmllogo.svg',
            alt: 'HTML Course Topic'
        },
        {
            title: 'CSS',
            caption: '11 ტოპიკი',
            src: 'assets/icons/cssbackground.svg',
            alt: 'Css Course Topic'
        },
        {
            title: 'JAVASCRIPT',
            caption: '20 ტოპიკი',
            src: 'assets/icons/javascriptbackground.svg',
            alt: 'Javascript Course Topic'
        },
        {
            title: 'GIT',
            caption: '5 ტოპიკი',
            src: 'assets/icons/gitback.svg',
            alt: 'Git Course Topic'
        },
        {
            title: 'REACT',
            caption: '11 ტოპიკი',
            src: 'assets/icons/reactback.svg',
            alt: 'React Course Topic'
        },
        {
            title: 'ალგორითები',
            caption: '15 ტოპიკი',
            src: 'assets/icons/algoback.svg',
            alt: 'Algorythms Course Topic'
        },
        {
            title: 'DEVELOPER TOOLS',
            caption: '15 ტოპიკი',
            src: 'assets/icons/developertoolsback.svg',
            alt: 'Developer Tools Topic'
        },
        {
            title: 'FIGMA',
            caption: '15 ტოპიკი',
            src: 'assets/icons/figmaback.svg',
            alt: 'Figma Tools Topic'
        },
        {
            title: 'PHOTOSHOP',
            caption: '11 ტოპიკი',
            src: 'assets/icons/photoshopback.svg',
            alt: 'Photo Shop Tools Topic'
        },
        {
            title: 'ILLUSTRATOR',
            caption: '11 ტოპიკი',
            src: 'assets/icons/ilustratorback.svg',
            alt: 'Illistrator Course Topic'
        }
    ])
    return (
        <div>
            <Header />
                {/*<Pagination*/}
                {/*    current={currentPage}*/}
                {/*    pageSize={pageSize}*/}
                {/*    total={100}*/}
                {/*    onChange={handlePageChange}*/}
                {/*/>*/}
            <div className={styles.MainWrapper}>
                <div className={styles.MainCourses}>
                    <div className={styles.SelectWrapper}>
                        <Sortselect />
                        <Pagination />
                    </div>
                    <div className={styles.CoursesWrapper}>
                        {info.map(info => <CourseCard src={info.src} title={info.title} alt={info.alt} caption={info.caption} />)}
                    </div>
                </div>
                <div className={styles.ChatWrapper}>
                    <div className={styles.Chat}>

                    </div>
                </div>
            </div>
        </div>
    )
}