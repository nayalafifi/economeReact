const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchUsers = async () => {
    const response = await fetch(`${API_BASE_URL}/`);
    if (!response.ok) throw new Error("Failed to fetch users");
    return await response.json();
};

export const createUser = async (userData) => {
    const response = await fetch(`${API_BASE_URL}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error("Failed to create user");
    return await response.json();
};
