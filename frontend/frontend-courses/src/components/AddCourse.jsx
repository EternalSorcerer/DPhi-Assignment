import { useState, useEffect } from "react";
import Axios from "axios";

const Submit = (e) => {
    e.preventDefault();
}

const AddCourse = ({ loggedin }) => {
    if (loggedin) {
    return (
        
            <div className="container">

                <div className="add-course" >
                    <form onSubmit={Submit}>
                        <label className="form-label" >Name</label>
                        <input type="text" className="form-control" name="name" />
                        <label className="form-label">Description</label>
                        <input type="text" className="form-control" name="desc" />
                        <label className="form-label">Image</label>
                        <input type="file" className="form-control" name="image" />
                        <label className="form-label">Creator</label>
                        <input type="text" className="form-control" name="creator" />
                    </form>
                </div>
            </div>      

    );
    } else {
        return (
            <>
                <h2>Please log in to add course.</h2>
                <a href="/login">Log in</a>
            </>
            
        );
    }
}

export default AddCourse;