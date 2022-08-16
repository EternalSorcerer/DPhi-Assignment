import { useState, useEffect } from "react";
import Axios from "axios";

const Submit = (e) => {
    e.preventDefault();
}

const AddCourse = ({ loggedin }) => {
    // if (loggedin === true) {
    const [courseName, setCourseName] = useState('');
    const [courseDesc, setCourseDesc] = useState('');
    const [courseImg, setCourseImg] = useState(null);
    const [courseCreator, setCourseCreator] = useState('');

    const handleImageChange = (e) => {
        console.log(e.target.files[0])
        setCourseImg(e.target.files[0]);
        console.log(courseImg);
    };

    const Submit = async (e) => {
        e.preventDefault();

        const url = "http://127.0.0.1:8000/courses/course/";

        let form_data = new FormData();
        form_data.append('image', courseImg, courseImg.name);
        form_data.append('name', courseName);
        form_data.append('desc', courseDesc);
        form_data.append('creator', courseCreator);

        await Axios.post(`${url}`, form_data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then(res => {
                res.json();
                console.log(res);
                window.location = "/courses";
            })
            .catch(err => console.log(err.response.data.message));
    }

    return (

        <div className="container">

            <div className="add-course" >
                <h1>Add Course Details</h1>
                <form onSubmit={Submit}>
                    <label className="form-label" >Name</label>
                    <input type="text" className="form-control" name="name"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                    />
                    <label className="form-label">Description</label>
                    <input type="text" className="form-control" name="desc"
                        value={courseDesc}
                        onChange={(e) => setCourseDesc(e.target.value)}
                    />
                    <label className="form-label">Image</label>
                    <input type="file" name="image" className="form-control" onChange={handleImageChange} />
                    <br />
                    <label className="form-label">Creator</label>
                    <input type="text" className="form-control" name="creator"
                        value={courseCreator}
                        onChange={(e) => setCourseCreator(e.target.value)}
                    />
                    <br />
                    <input type="submit" className="btn btn-primary" />
                </form>
            </div>
        </div>

    );
    // } else {
    //     return (
    //         <>
    //             <h2>Please log in to add course.</h2>
    //             <a href="/login">Log in</a>
    //         </>

    //     );
    // }
}

export default AddCourse;