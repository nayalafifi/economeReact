import React, { useState, useEffect } from 'react';
import './GoalSetting.css';

function GoalSetting() {
    const [goals, setGoals] = useState([]); // State for existing goals
    const [newGoal, setNewGoal] = useState({
        goal_type: '', // Matches backend key
        target_amount: '', // Matches backend key
        current_amount: '', // Matches backend key
        due_date: '', // Matches backend key
        status: 'Active', // Default status for a new goal
    });

    const [errorMessage, setErrorMessage] = useState(''); // State for error messages

    // Fetch existing goals from the backend on component mount
    useEffect(() => {
        const fetchGoals = async () => {
            const token = localStorage.getItem('access_token');
            try {
                const response = await fetch("http://127.0.0.1:8000/goals/", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`, // Pass token for authentication
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setGoals(data);
                } else {
                    console.error("Failed to fetch goals");
                    setErrorMessage("Unable to fetch goals. Please try again.");
                }
            } catch (error) {
                console.error("Error fetching goals:", error);
                setErrorMessage("An error occurred while fetching goals.");
            }
        };

        fetchGoals();
    }, []);

    // Handle form input changes
    const handleChange = (e) => {
        setNewGoal({ ...newGoal, [e.target.name]: e.target.value });
    };

    // Handle form submission to create a new goal
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Validate the input
        if (!newGoal.goal_type || !newGoal.target_amount || !newGoal.current_amount || !newGoal.due_date) {
            setErrorMessage("All fields are required.");
            return;
        }

        const token = localStorage.getItem('access_token');
        const goalToAdd = {
            goal_type: newGoal.goal_type,
            target_amount: parseFloat(newGoal.target_amount), // Ensure numeric values
            current_amount: parseFloat(newGoal.current_amount), // Ensure numeric values
            due_date: newGoal.due_date,
            status: newGoal.status,
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/goals/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`, // Pass token for authentication
                },
                body: JSON.stringify(goalToAdd),
            });

            if (response.ok) {
                const newGoalData = await response.json();
                setGoals([...goals, { ...goalToAdd, id: newGoalData.goal_id }]); // Add new goal to state
                setNewGoal({ goal_type: '', target_amount: '', current_amount: '', due_date: '', status: 'Active' }); // Reset form
                setErrorMessage(''); // Clear any error messages
            } else {
                console.error("Failed to create goal");
                setErrorMessage("Unable to create the goal. Please try again.");
            }
        } catch (error) {
            console.error("Error creating goal:", error);
            setErrorMessage("An error occurred while creating the goal.");
        }
    };

    // Filter goals by status
    const activeGoals = goals.filter(goal => goal.status === 'Active');
    const completedGoals = goals.filter(goal => goal.status === 'Completed');

    return (
        <div className="goal-setting">
            <h2>Goal Setting</h2>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            {/* Form for adding a new goal */}
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

            {/* Active goals section */}
            <h3>Active Goals</h3>
            <div className="goal-list">
                {activeGoals.map((goal) => (
                    <div key={goal.id} className="goal-item card">
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

            {/* Completed goals section */}
            <h3>Completed Goals</h3>
            <div className="goal-list">
                {completedGoals.map((goal) => (
                    <div key={goal.id} className="goal-item card completed">
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
