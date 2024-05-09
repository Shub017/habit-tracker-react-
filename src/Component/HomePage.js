import { useNavigate } from 'react-router-dom'
import image1 from '../Image/_05c78956-048f-452b-afdf-d23da1757076.jpeg' 
import styles from './HomePage.module.css'
export const HomePage = ()=>{
    const navigate = useNavigate();
    return(
        <div className={styles.backgroundColor}>
        <h1 className={styles.Heading}>Welcome to Habit Tracker App</h1>
        <div className={styles.ImageBox}>
            <img src={image1}></img>
            <button className={`${styles.customBtn} ${styles.btn1}`} onClick={()=>{navigate('/HabitTracker')}}>Get Started!</button>
        </div>
        </div>
    )
}