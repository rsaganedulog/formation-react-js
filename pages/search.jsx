import React, {useEffect, useState} from "react";
import UserTable from "../components/UserTable";

export default () => {
    const [users, setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    async function loadUsers() {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const data = await response.json();
            if (data instanceof Array) {
                setUsers(data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadUsers()
    }, [])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter((user) => {
        return (
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <>
            <h1>Recherche :</h1>
            <input type="text" placeholder="Search..." onChange={handleSearch} />

            {users.length > 0 && <UserTable users={filteredUsers}/>}
        </>
    );
}
