import { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setpasswordConf] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState([]);

    const Submit = (e) => {
        e.preventDeafault();
        console.log("form submit");
    }
    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={Submit}>
                <div className="form-group">
                    <input className="form-control" autofocus type="text" name="username" placeholder="Username" />
                </div>
                <br />

                <div className="form-group">
                    <input className="form-control" type="email" name="email" placeholder="Email Address" />
                </div>
                <br />

                <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="Password" />
                </div>
                <br />

                <div className="form-group">
                    <input className="form-control" type="password" name="confirmation" placeholder="Confirm Password" />
                </div>
                <br />

                <input className="btn btn-primary mx-3" type="submit" value="Register" />
            Already have an account? <a href="Login">Log In here.</a>

            </form>
            <br />
        </div>
    );
}

export default Register;