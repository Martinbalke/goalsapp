import React from 'react';
import { connect } from 'react-redux';


function EditGoals({ goals, setEditing }) {
  if (!goals || !goals.length) return <div></div>
  return (
    <div className="edit">
      <h3 className="edit__tertiary">Edit your goals :</h3>
      {goals.map((goal, index) => (
        <div className="edit__goal" key={index}>
          <h3 className='edit__tertiary'>{goal.goal}</h3>
          <button className='btn btn-main edit__btn' onClick={() => { setEditing(index) }}></button>
        </div>))}
    </div>
  );
}
const mSTP = state => ({
  goals: state.goals
})

export default connect(mSTP)(EditGoals);