import styles from './CourseCard.module.css'
import Stepper from '@/components/Stepper/Stepper'

export default function CourseCard(props) {
    return (
        <div className={styles.CoursesWrapper}>
            <div className={styles.Course}>
                <div className={styles.CourseImage}>
                    <img src={props.src} alt={props.alt}/>
                </div>
                <div className={styles.CourseInfo}>
                    <h2 className={styles.CourseTitle}>{props.title}</h2>
                    <span className={styles.TopicCaption}>{props.caption}</span>
                </div>
                <div className={styles.stepperWrapper}>
                    <Stepper />
                </div>
            </div>
        </div>
    )
}