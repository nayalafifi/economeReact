import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GoalSetting.css';

function GoalSetting() {
    const [goals, setGoals] = useState([]);
    const [newGoal, setNewGoal] = useState({
        goal_type: '',
        target_amount: '',
        current_amount: '',
        due_date: '',
        status: 'Active',
    });

    const userId = 1; // Replace with the logged-in user's ID

    // Fetch existing goals from the backend
    useEffect(() => {
        const fetchGoals = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/goals/${userId}`);
                setGoals(response.data);
            } catch (error) {
                console.error('Error fetching goals:', error);
                alert('Failed to fetch goals.');
            }
        };
        fetchGoals();
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        setNewGoal({ ...newGoal, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!newGoal.goal_type || !newGoal.target_amount || !newGoal.current_amount || !newGoal.due_date) return;

        const goalToAdd = {
            ...newGoal,
            user_id: userId,
            set_date: new Date().toISOString().split('T')[0],
        };

        try {
            const response = await axios.post('http://localhost:8000/goals/', goalToAdd);
            setGoals([...goals, { ...goalToAdd, goal_id: response.data.goal_id }]);
            setNewGoal({ goal_type: '', target_amount: '', current_amount: '', due_date: '', status: 'Active' });
        } catch (error) {
            console.error('Error adding goal:', error);
            alert('Failed to add goal.');
        }
    };

    const activeGoals = goals.filter((goal) => goal.status === 'Active');
    const completedGoals = goals.filter((goal) => goal.status === 'Completed');

    return (
        <div className="goal-setting">
            <h2>Goal Setting</h2>
            <div className="card">
                <h3>Add New Goal</h3>
                <form onSubmit={handleSubmit} className="goal-form">
                    <div className="form-group">
                        <label htmlFor="goal_type">Goal Name</label>
                        <input
                            id="goal_type"
                            name="goal_type"
                            value={newGoal.goal_type}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="target_amount">Target Amount</label>
                        <input
                            type="number"
                            id="target_amount"
                            name="target_amount"
                            value={newGoal.target_amount}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="current_amount">Current Amount</label>
                        <input
                            type="number"
                            id="current_amount"
                            name="current_amount"
                            value={newGoal.current_amount}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="due_date">Deadline</label>
                        <input
                            type="date"
                            id="due_date"
                            name="due_date"
                            value={newGoal.due_date}
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
                    <div key={goal.goal_id} className="goal-item card">
                        <h4>{goal.goal_type}</h4>
                        <p>Target: ${goal.target_amount}</p>
                        <p>Current: ${goal.current_amount}</p>
                        <p>Deadline: {goal.due_date}</p>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${(goal.current_amount / goal.target_amount) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            <h3>Completed Goals</h3>
            <div className="goal-list">
                {completedGoals.map((goal) => (
                    <div key={goal.goal_id} className="goal-item card completed">
                        <h4>{goal.goal_type}</h4>
                        <p>Target: ${goal.target_amount}</p>
                        <p>Completed On: {goal.due_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GoalSetting;
