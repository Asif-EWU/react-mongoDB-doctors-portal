import React, { useEffect, useState } from 'react';
import Doctors from './Doctors';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const [doctorList, setDoctorList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctorList')
        .then(res => res.json())
        .then(data => setDoctorList(data))
    }, []);

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('http://localhost:5000/addDoctor', {
            method: 'Post',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // setImage(`http://localhost:5000${data.path}`)
        })
        .catch(err => {
            console.log(err);
        })

        // e.preventDefault();
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Upload a image</label>
                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <div className="row">
                {
                    doctorList.map((doctor, index) => <Doctors key={index.toString()} doctor={doctor}></Doctors>)
                }
            </div>
            {/* <img style={{height: "500px"}} src={image} alt=""/> */}
        </div>
    );
};

export default AddDoctor;