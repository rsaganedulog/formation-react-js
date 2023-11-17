import {useEffect, useState} from "react";
import UserTable from "../components/UserTable";

export default () => {
    const [users, setUsers] = useState({})

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


    return (
        <>
            <h1>Recherche :</h1>

            {users.length > 0 && <UserTable users={users}/>}
        </>
    );
}
