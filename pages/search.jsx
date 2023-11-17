import React, {useEffect, useState} from "react";
import UserTable from "../components/UserTable";

export default () => {
    const [users, setUsers] = useState({})
    const [reloadUser, setReloadUsers] = useState(false)

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
    }, [reloadUser])


    const handleChange = event => {
        const inputValue = event.target.value.toLowerCase();
        const result = users.filter(user => user.name.toLowerCase().includes(inputValue));
        setUsers(result);
    };


    const handleClick = () => {
        setReloadUsers(!reloadUser)
    };

    return (
        <>
            <h1>Recherche :</h1>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>RESET</button>

            {users.length > 0 && <UserTable users={users}/>}
        </>
    );
}
