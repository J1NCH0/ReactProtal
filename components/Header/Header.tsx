import styles from './Header.module.css';
import Navigation from '../Navigation/Navigation'
import CurrentDate from '../Date/Date';
import Select from '../Select/Select'
import { FaDiscord } from 'react-icons/fa';
const items = [
    {
        label: 'ᲢᲔᲥᲜᲝᲚᲝᲒᲘᲔᲑᲘ',
        key: 'Technological Subjects',
    },
    {
        label: 'ᲞᲠᲝᲤᲔᲡᲘᲔᲑᲘ',
        key: 'Professions',
    },
];
export default function Header (props) {
    return (
        <div className={styles.header__wrapper}>
            <div className={styles.header}>
                <div className={styles.header__info}>
                    <div className={styles.header__logo_wrapper}>
                            <img src={'../../../assets/icons/Logo.svg'} width={'72'} height={'48'}/>
                        <div>
                            <span className={styles.caption}>Team</span>
                            <h2 className={styles.title}>Novatori</h2>
                        </div>
                    </div>
                    <Navigation items={items}/>
                </div>
                <div className={styles.headerSelectWrapper}>
                    <CurrentDate />
                    <Select />
                </div>
            </div>
        </div>
    )
}