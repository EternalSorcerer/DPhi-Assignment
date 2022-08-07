import { useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";
const Login = ({loggedin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    

    const login = (e) => {
        // const credentials = {
            
        // }
        // console.log(credentials);
        // fetch('http://127.0.0.1:8000/auth/', {
        //     method: "POST",
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(credentials)
        // })
        //     .then(data => data.json())
        //     .then(
        //         data => console.log(data)
        //     )
        //     .catch(() => {
        //         setError("Please log in with proper credentials.");
        //         console.log("Error");
        //     })

        const url = "http://127.0.0.1:8000/auth/"

        Axios.post(`${url}`, {'username': username, 'password': password})
        .then(res => {
            // res.json();
            const token = new Cookies();
            token.set('token', res.data.token, {path: '/', maxAge:604800 })
            console.log(res);
            loggedin = true;
            // console.log(loggedin);
            window.location = "/";
        })
        .catch(() => setError("Please log in again using proper credentials!"))

        // window.location = "/";
    }


    const handleChangeName = (event) => {
        setUsername(event.target.value);

    }
    // console.log("Username: "+ username);

    const handleChangePass = (event) => {
        setPassword(event.target.value);

    }
    // console.log("Password is: " + password);

    return (
        <div className="login-form">
            <div className="container">
                <h1>Login </h1>
                {error && <div className="alert alert-danger" role="alert">
                    {error}
                </div>}
                <div className="form-group">
                    <input autoFocus className="form-control" type="text" name="username" placeholder="Username"
                        value={username}
                        onChange={handleChangeName}

                    />
                </div>
                <br />
                <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="Password"
                        value={password}
                        onChange={handleChangePass}
                    />
                </div>
                <br />
                <button className="btn btn-primary" onClick={login}>Login</button>
            </div>
        </div>
    );
}

export default Login;