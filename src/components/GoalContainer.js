import React, {useState, useEffect} from 'react';
import Goal from './Goal';
import Modal from './Modal'
import GoalForm from './GoalForm';
import EditGoal from './EditGoals';
import SetGoal from './SetGoals';
import Chart from './Chart';
import Milestone from './Milestone';
import ChartContainer from './ChartsContainer'
import { connect } from 'react-redux';
import { loadGoals } from '../store/goalReducer';
import {AnimatePresence} from 'framer-motion';


function GoalContainer({goals, dispatch, progressData}) {
  //State variable to keep track of which goal is currently being edited
  const [editing, setEditing] = useState(-1);

  
  useEffect( () => {
    dispatch(loadGoals());
  },[dispatch])

  //Generate a Goal component for each goal in the global state
  function generateChildren(){
    if(!goals) return <div/>
      return goals.map( (goal,index) => 
      <Goal index={index} key={index} goal={goal}>
        <Milestone goal={goal} index={index}/>
      </Goal> 
      )
  }

  return (
    <section className="contentContainer">
      <SetGoal setEditing={setEditing}>
        <EditGoal setEditing={setEditing}/>
      </SetGoal>
      <AnimatePresence>
      {editing >= 0 && (<Modal className='goalForm__background' close={() => setEditing(-1)}>
        <GoalForm index={editing} close={() => setEditing(-1)} />
      </Modal>)}
      </AnimatePresence>
      <div className="goalContainer">
        {generateChildren()}
      </div>
      <ChartContainer>
        <Chart/>
      </ChartContainer>
    </section>
  );
}

const mSTP = state => ({
  goals: state.goals,
  progressData: state.progress
});

export default connect(mSTP)(GoalContainer);