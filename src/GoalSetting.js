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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newGoal.name || !newGoal.targetAmount || !newGoal.deadline) return;
        setGoals([...goals, newGoal]);
        setNewGoal({ name: '', targetAmount: '', deadline: '' }); // Reset form after submission
    };

    return (
        <div className="goal-setting-layout">
            <form onSubmit={handleSubmit} className="goal-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Goal name"
                    value={newGoal.name}
                    onChange={handleChange}
                    className="goal-input"
                    required
                />
                <input
                    type="number"
                    name="targetAmount"
                    placeholder="Target amount"
                    value={newGoal.targetAmount}
                    onChange={handleChange}
                    className="goal-input"
                    required
                />
                <input
                    type="date"
                    name="deadline"
                    value={newGoal.deadline}
                    onChange={handleChange}
                    className="goal-input"
                    required
                />
                <button type="submit" className="goal-button">Add Goal</button>
            </form>
            <div className="goal-list">
                {goals.map((goal, index) => (
                    <div key={index} className="goal-item">
                        {goal.name} - ${goal.targetAmount} by {goal.deadline}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GoalSetting;
