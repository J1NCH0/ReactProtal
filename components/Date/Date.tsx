import styles from './Date.module.css';
import React, { useEffect, useState } from 'react';
import moment from './momentsetup';



function CurrentDate() {
    const [dateTime, setDateTime] = useState(moment());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(moment());

        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedDateTime = dateTime.locale('ka').format('dddd, D MMMM HH:mm');

    return <div className={styles.dateWrapper}>
        <div className={styles.date}>
            {formattedDateTime}
        </div>
    </div>;
}

export default CurrentDate;


