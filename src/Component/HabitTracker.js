import React from 'react';
import styles from '../App.module.css' // Importing CSS module
import { useSelector, useDispatch } from 'react-redux';
import { habitListSelector, setHabitName, addNewHabit } from '../Redux/habitList';
import { useRef } from 'react';


export function HabitTracker() {
  let id = 0;
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { habitName, habitList } = useSelector(habitListSelector); // Selecting habitName from state

  const handleInputChange = (event) => {
    dispatch(setHabitName(event.target.value));
  };

  const handleAddNewHabit = (event) => {
    event.preventDefault();
    if (habitName.trim() === ''){
      return;
    }
    dispatch(addNewHabit(habitName));
    console.log(habitList);
    // Focusing on the input field using the ref
    if (inputRef.current) {
        inputRef.current.focus();
        // Clearing the input field value
        inputRef.current.value = '';
        dispatch(setHabitName(''));
    }
};


  return (
    <>
      <div className={`${styles.appName} ${styles.centerFlexingColumn}`}>
        <p className={styles.heading}>Habit Tracker</p>
        <div className={`${styles.centerFlexing} ${styles.subheadingLine}`}>Empowering Progress, One Habit at a Time</div>
      </div>

      {/* Adding input field to add habits */}
      <div className={`${styles.centerFlexingRow} ${styles.inputBoxContainer}`}>
        <input
          ref={inputRef}
          type="text"
          id="fname"
          name="fname"
          placeholder='Enter/Add New Habit'
          className={styles.inputField}
          onChange={handleInputChange} // Corrected onChange handler
        />
        <button
          className={`${styles.addNewHabitButton} ${styles.customBtn} ${styles.btn1}`}
          onClick={handleAddNewHabit} // Corrected onClick handler
        >
          Add New Habit
        </button>
      </div>
      {habitList.length !== 0?
        <div className={styles.noteRightOrWrong}>
        <p >Note: Left One is for done✅ </p>
        <p>  Middle one is for not done❌</p>
        <p> Right one is for None🚫</p>
        </div>
        :''}
      {habitList.length !== 0?
      habitList.map((habit)=>

        <div className={`${styles.centerFlexingRow} ${styles.marginTop}`}>
          <div className={styles.habitName}>{habit.name}</div>
            
            {[...Array(7)].map((_, i) => {
                id += 1;
                return (
                  <div className={`${styles.centerFlexingColumn} ${styles.marginLeft}`}>
                    <div key={id}>
                    <span>{new Date(new Date().getTime() - i * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB')}</span>
                        <div className={styles.centerFlexingRow}>
                            <input type="radio" id={id + 'Done'} name={id} className={styles.radioButtonSize}/>
                            <label htmlFor={id + 'Done'}>✅</label>
                            <input type="radio" id={id + 'NotDone'} name={id}  className={styles.radioButtonSize}/>
                            <label htmlFor={id + 'NotDone'}>❌</label>
                            <input type="radio" id={id + 'Other'} name={id} className={styles.radioButtonSize}/>
                            <label htmlFor={id + 'Other'}>🚫</label>
                        </div>
                    </div>
                  </div>
                );
            })}
            
        </div>
      )
      
      :<p className={styles.blankList}>Nothing added in the list so far</p>}
    </>
  );
}


