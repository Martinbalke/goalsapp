import React, { useState, useLayoutEffect } from 'react';
import Input from './Input';
import { connect } from 'react-redux';
import { newGoal, updateGoal } from '../store/goalReducer';
import { motion } from "framer-motion"
import { popupFormAnimation } from './animations';

function GoalForm({ close, dispatch, index, goals }) {
  const blankGoal = { goal: '', habits: ['', '', '']}
  const [goal, setGoal] = useState(goals[index] || blankGoal);
  


  const inputTextChange = ((e, index) => {
    console.log(e)
    // if (!index) return setGoal({ ...goal.habits, goal: text })
    //   let newHabits = [...goal.habits];
    //   newHabits[index] = text;
    //   setGoal({ ...goal, habits: newHabits });
  })



 



  return (
    <div className='goalForm'>
      <motion.div className="goalForm__content" variants={popupFormAnimation}>
        <form className="goalForm__form-element" autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            goal._id ? dispatch(updateGoal(goal, index)) : dispatch(newGoal(goal, index));
            close();
          }}>
          <button className='btn btn--close popup__close' onClick={close} />
          <h3 className='goalForm__tertiary'>Set a new goal</h3>
          <div className="goalForm__inputs">
            <Input className='goalForm__input' id='goal' onChange={inputTextChange} defaultValue={goal.goal} labelText='Goal' />
            <Input className='goalForm__input' id='habit1' onChange={() => { inputTextChange() }} defaultValue={`${goal.habits[0]}`} labelText='Habit 1' />
            <Input className='goalForm__input' id='habit2' onChange={() => { inputTextChange() }} defaultValue={`${goal.habits[1]}`} labelText='Habit 2' />
            <Input className='goalForm__input' id='habit3' onChange={() => { inputTextChange() }} defaultValue={`${goal.habits[2]}`} labelText='Habit 3' />
          </div>
          <button type='submit' className='btn goalForm__submit' />
        </form>
      </motion.div>
      <motion.div className="goalForm__sidebar" variants={popupFormAnimation}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='popup__sidebar-svg'>
          <path fillOpacity="1" d="M0,96L40,112C80,128,160,160,240,176C320,192,400,192,480,192C560,192,640,192,720,197.3C800,203,880,213,960,224C1040,235,1120,245,1200,218.7C1280,192,1360,128,1400,96L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
        <h3 className="goalForm__sidebar-tertiary">Creating a meaningful goal</h3>
        <p className="goalForm__sidebar-paragraph"><span className='goalForm__sidebar-numbers'>1</span>   Laborum atque culpa similique, dolorem magnam veritatis! Accusamus facilis quaerat cum facere maiores.</p>
        <p className="goalForm__sidebar-paragraph"><span className='goalForm__sidebar-numbers'>2</span>   Laborum atque culpa similique, dolorem magnam veritatis! Accusamus facilis quaerat cum facere maiores.</p>
        <p className="goalForm__sidebar-paragraph"><span className='goalForm__sidebar-numbers'>3</span>   Laborum atque culpa similique, dolorem magnam veritatis! Accusamus facilis quaerat cum facere maiores.</p>
      </motion.div>
    </div>
  );
}
const mSTP = state => ({
  goals: state.goals,
});

export default connect(mSTP)(GoalForm);