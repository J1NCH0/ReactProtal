import styles from './Stepper.module.css'

export default function Stepper() {
    return (
        <div className={styles.StepperWrapper}>
            <div className={styles.Stepper}></div>
            <div className={styles.Stepper}></div>
            <div className={styles.Stepper}></div>
            <div className={styles.Stepper}></div>
            <div className={styles.Stepper}></div>
            <div className={styles.Stepper}></div>
            <div className={styles.Stepper}></div>
        </div>
    )
}