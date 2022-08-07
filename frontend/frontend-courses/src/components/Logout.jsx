import React, { useEffect } from "react";
import Cookies from "universal-cookie";

const Logout = ({loggedin}) => {
    useEffect(() => {
        const token = new Cookies()
        token.remove('token');
        loggedin = false;
        // console.log(loggedin);
        // window.location = "/";
    }, [])
    return(
        <h1>Loading...</h1>
    )
}

export default Logout;