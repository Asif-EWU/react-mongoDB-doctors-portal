import React from 'react';
import Fluoride from '../../../images/fluoride.png'
import Cavity from '../../../images/cavity.png'
import Whitening from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { Link } from "react-router-dom"

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: Fluoride
    },
    {
        name: 'Cavity Filling',
        img: Cavity
    },
    {
        name: 'Teeth Whitening',
        img: Whitening
    }
]

const myStyle = {
    cursor: 'pointer',
    display: 'block',
    margin: '60px auto'
}

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="row w-75 mx-auto mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
            <Link to="/addDoctor">
                <button style={myStyle} className="btn btn-primary">Add Doctor</button>
            </Link>
        </section>
    );
};

export default Services;