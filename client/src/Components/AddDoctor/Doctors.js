import React from 'react';

const Doctors = ({doctor}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: "200px"}} className="img-fluid my-3" src={`data:image/png;base64,${doctor.image.img}`} alt=""/>
            <h3>Name: {doctor.name}</h3>
            <h5>Email: {doctor.email}</h5>
        </div>
    );
};

export default Doctors;