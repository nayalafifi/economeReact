import React, { useState, useEffect } from 'react';
import './GoalSetting.css';

function GoalSetting() {
    const [goals, setGoals] = useState([]);
    const [newGoal, setNewGoal] = useState({
        name: '',
        targetAmount: 0,
        currentAmount: 0,
        deadline: '',
        user_id: 1  // Assuming this needs to match a specific user context
    });

    // Fetch goals when the component mounts
    useEffect(() => {
        fetch(`http://localhost:8000/goals/${newGoal.user_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Include auth headers if needed
            }
        })
        .then(response => response.json())
        .then(data => setGoals(data))
        .catch(error => console.error('Error fetching goals:', error));
    }, []);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const parsedValue = type === 'number' ? parseFloat(value) : value;
        setNewGoal(prev => ({ ...prev, [name]: parsedValue }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const body = JSON.stringify({ ...newGoal, targetAmount: parseFloat(newGoal.targetAmount), currentAmount: parseFloat(newGoal.currentAmount) });

        fetch('http://localhost:8000/goals/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Include auth headers if needed
            },
            body: body
        })
        .then(response => {
            if (!response.ok) throw new Error('Failed to add goal');
            return response.json();
        })
        .then(addedGoal => {
            setGoals([...goals, addedGoal]);
            setNewGoal({ name: '', targetAmount: 0, currentAmount: 0, deadline: '', user_id: 1 }); // Reset the form
        })
        .catch(error => console.error('Error adding goal:', error));
    };

    return (
        <div className="goal-setting">
            <h2>Goal Setting</h2>
            <form onSubmit={handleSubmit} className="goal-form">
                <input name="name" value={newGoal.name} onChange={handleChange} placeholder="Goal Name" required />
                <input type="number" name="targetAmount" value={newGoal.targetAmount} onChange={handleChange} placeholder="Target Amount" required />
                <input type="number" name="currentAmount" value={newGoal.currentAmount} onChange={handleChange} placeholder="Current Amount" required />
                <input type="date" name="deadline" value={newGoal.deadline} onChange={handleChange} required />
                <button type="submit">Add Goal</button>
            </form>
            <div>
                {goals.map(goal => (
                    <div key={goal.id}>
                        <p>{goal.name} - ${goal.currentAmount} of ${goal.targetAmount} by {goal.deadline}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GoalSetting;
