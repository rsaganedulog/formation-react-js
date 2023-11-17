import {useState} from "react";
import { useRouter } from 'next/router';

export default () => {
    const router = useRouter();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [isError, setIsError] = useState(false);


    const handleSubmit = async event => {
        event.preventDefault();

        try {
            if (user.email === 'email' && user.password === 'password' ) {
                await router.push('/about')
            } else {
                setIsError(true)
            }
        } catch (error) {
            console.error(error)
        }
    };


    const handleChange = ({currentTarget}) => {
        const {value, name} = currentTarget;
        setUser(previousState => ({
            ...previousState,
            [name]: value
        }));
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                Identifiants :<br/>
                E-mail : <b>email</b><br/>
                Password : <b>password</b>
                <hr/>
                <input name="email" type="text" onChange={handleChange}/>
                <input name="password" type="password" onChange={handleChange}/>
                {isError && <p>Les identifiants sont incorrects</p>}
                <button>Se connecter</button>
            </form>
        </>
    );
}