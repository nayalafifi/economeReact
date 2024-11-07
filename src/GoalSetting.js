import React, { useState, useEffect } from 'react';
import './GoalSetting.css';

function GoalSetting() {
    const [goals, setGoals] = useState([]);
    const [newGoal, setNewGoal] = useState({
        name: '',
        targetAmount: '',
        currentAmount: '',
        deadline: '',
        status: 'Active'
    });

    useEffect(() => {
        // Simulating fetching goals from an API
        const initialGoals = [
            { id: 1, name: 'Emergency Fund', targetAmount: 10000, currentAmount: 5000, deadline: '2024-12-31', status: 'Active' },
            { id: 2, name: 'Vacation Savings', targetAmount: 5000, currentAmount: 2500, deadline: '2024-06-30', status: 'Active' },
            { id: 3, name: 'New Laptop', targetAmount: 2000, currentAmount: 2000, deadline: '2023-12-31', status: 'Completed' }
        ];
        setGoals(initialGoals);
    }, []);

    const handleChange = (e) => {
        setNewGoal({ ...newGoal, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newGoal.name || !newGoal.targetAmount || !newGoal.currentAmount || !newGoal.deadline) return;
        const goalToAdd = {
            ...newGoal,
            id: goals.length + 1,
            targetAmount: parseFloat(newGoal.targetAmount),
            currentAmount: parseFloat(newGoal.currentAmount)
        };
        setGoals([...goals, goalToAdd]);
        setNewGoal({ name: '', targetAmount: '', currentAmount: '', deadline: '', status: 'Active' });
    };

    const activeGoals = goals.filter(goal => goal.status === 'Active');
    const completedGoals = goals.filter(goal => goal.status === 'Completed');

    return (
        <div className="goal-setting">
            <h2>Goal Setting</h2>
            <div className="card">
                <h3>Add New Goal</h3>
                <form onSubmit={handleSubmit} className="goal-form">
                    <div className="form-group">
                        <label htmlFor="name">Goal Name</label>
                        <input
                            
                            id="name"
                            name="name"
                            value={newGoal.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="targetAmount">Target Amount</label>
                        <input
                            type="number"
                            id="targetAmount"
                            name="targetAmount"
                            value={newGoal.targetAmount}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="currentAmount">Current Amount</label>
                        <input
                            type="number"
                            id="currentAmount"
                            name="currentAmount"
                            value={newGoal.currentAmount}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="deadline">Deadline</label>
                        <input
                            type="date"
                            id="deadline"
                            name="deadline"
                            value={newGoal.deadline}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Goal</button>
                </form>
            </div>

            <h3>Active Goals</h3>
            <div className="goal-list">
                {activeGoals.map((goal) => (
                    <div key={goal.id} className="goal-item card">
                        <h4>{goal.name}</h4>
                        <p>Target: ${goal.targetAmount}</p>
                        <p>Current: ${goal.currentAmount}</p>
                        <p>Deadline: {goal.deadline}</p>
                        <div className="progress-bar">
                            <div 
                                className="progress" 
                                style={{width: `${(goal.currentAmount / goal.targetAmount) * 100}%`}}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            <h3>Completed Goals</h3>
            <div className="goal-list">
                {completedGoals.map((goal) => (
                    <div key={goal.id} className="goal-item card completed">
                        <h4>{goal.name}</h4>
                        <p>Target: ${goal.targetAmount}</p>
                        <p>Completed On: {goal.deadline}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GoalSetting;
