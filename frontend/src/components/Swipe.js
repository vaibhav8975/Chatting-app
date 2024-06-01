import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Swipe() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Swipe</h2>
            {users.map(user => (
                <div key={user._id}>
                    <h3>{user.name}</h3>
                    <p>{user.bio}</p>
                    {/* Implement swipe functionality */}
                </div>
            ))}
        </div>
    );
}

export default Swipe;
