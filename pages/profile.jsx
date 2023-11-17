import {useEffect, useState} from "react";

export default () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        setUser({
            email: 'email@email.fr',
            password: 'password'
        })
    }, [])

    return (
        <>
            <h1>Voici votre profile :</h1>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
        </>
    );
}
