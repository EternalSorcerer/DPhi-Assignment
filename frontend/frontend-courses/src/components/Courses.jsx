import Navbar from './Navbar';
import Axios from "axios";
import { useState, useEffect } from 'react';
import './Courses.css'

const Courses = () => {
    const [data, setData] = useState([]);

   useEffect(() => {
    Axios.get("http://127.0.0.1:8000/courses/course/")
    .then(res => setData(res.data))
    .catch((err) => console.log(err))
   }, [])
    return (
        <div className="courses">
            <h1>See all the available courses here!</h1>
            <div className="container-fluid ">
                <div className="row">
                    {data.map(data => {
                        return (
                            <div className="card mx-3 my-2" style={{ width: "18rem" }} key={data.id}>
                                <img src={data.image} className="card-img-top" style={{ width: "17rem" }} />
                                <div className="card-body">
                                    <h4 className="card-title"><strong>{data.name}</strong></h4>
                                    {/* <h5 className="card-text"><strong>{data.desc}</strong></h5> */}
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        {data.creator}
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <a href="#" type="submit" className="btn btn-primary">View </a>
                                    <a href="#" type="submit" className="btn btn-secondary mx-3">Enroll in course</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Courses;