import { useState, useEffect } from "react";
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const login = (e) => {
        const credentials = {
            'username': username,
            'password': password
        }
        console.log(credentials);
        fetch('http://127.0.0.1:8000/auth/', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(credentials)
        })
        .then(data => data.json())
        .then(
            data=>console.log(data)
        )
        .catch(err =>console.log(err))
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