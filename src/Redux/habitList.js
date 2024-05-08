import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {habitName:'',habitList:[], id:0}

const habitListSlice = createSlice({
    name:'habitList',
    initialState,
    
    reducers:{
        setHabitName:(state, action)=>{
            state.habitName = action.payload;
        },

        addNewHabit:(state)=>{
            state.habitList.push({name:state.habitName})
        },

        increaseId:(state)=>{
            console.log('increasing id by 1');
            state.id += 1;
        }
    }
});

export const habitListReducer = habitListSlice.reducer;
export const {setHabitName, addNewHabit, increaseId} = habitListSlice.actions;

export const habitListSelector = (state) => state.habitListReducer;