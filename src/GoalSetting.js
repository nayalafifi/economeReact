import React, { useState } from 'react';

function GoalSetting() {
    const [goals, setGoals] = useState([]);
    const [newGoal, setNewGoal] = useState({
        name: '',
        targetAmount: '',
        deadline: ''
    });
