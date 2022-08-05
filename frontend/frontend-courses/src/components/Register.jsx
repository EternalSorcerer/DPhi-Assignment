import { useState } from 'react';

const Register = () => {
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');
    const [username, setUsername] = useState('');
    // const [error, setError] = useState([]);

    const Submit = (e) => {
        e.preventDefault();
        console.log("form submit");
        const details = {
            'username': username,
            'password': password,
        }
        // if (error === "") {
            fetch("http://127.0.0.1:8000/courses/users/", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(details)
            })
                .then(data => data.json())
                .then(data => {
                    console.log(data);
                })
                .catch(err => console.log(err))
        // }
    }

    // const register = (e) => {
       
    //     // window.location = "/";

    // }

    return (
        <div className="container">
            <h1>Register</h1>
            {/* <h4 className="form-error">{error}</h4> */}
            <form onSubmit={Submit}>
                <div className="form-group">
                    <input className="form-control" autoFocus type="text" name="username" placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <br />

                {/* <div className="form-group">
                    <input className="form-control" type="email" name="email" placeholder="Email Address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div> */}
                {/* <br /> */}

                <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br />

                <div className="form-group">
                    <input className="form-control" type="password" name="confirmation" placeholder="Confirm Password"
                        value={passwordConf}
                        onChange={(e) => setPasswordConf(e.target.value)}
                    />
                </div>
                <br />

                <button className="btn btn-primary mx-3" onSubmit={Submit} >Register</button>
                Already have an account? <a href="Login">Log In here.</a>

            </form>
            <br />
        </div>
    );
}

export default Register;