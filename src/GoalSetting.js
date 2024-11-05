import React, { useState } from 'react';
import './GoalSetting.css';


function GoalSetting() {
    const [goals, setGoals] = useState([]);
    const [newGoal, setNewGoal] = useState({
        name: '',
        targetAmount: '',
        deadline: ''
    });
    const handleChange = (e) => {
        setNewGoal({ ...newGoal, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newGoal.name || !newGoal.targetAmount || !newGoal.deadline) return;
        setGoals([...goals, newGoal]);
        setNewGoal({ name: '', targetAmount: '', deadline: '' }); // Reset form
    };

    return (
        <div>
            <h2>Set Your Financial Goals</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Goal name"
                    value={newGoal.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="targetAmount"
                    placeholder="Target amount"
                    value={newGoal.targetAmount}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="deadline"
                    value={newGoal.deadline}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Goal</button>
            </form>
            <ul>
                {goals.map((goal, index) => (
                    <li key={index}>{goal.name} - ${goal.targetAmount} by {goal.deadline}</li>
                ))}
            </ul>
        </div>
    );
}

export default GoalSetting;