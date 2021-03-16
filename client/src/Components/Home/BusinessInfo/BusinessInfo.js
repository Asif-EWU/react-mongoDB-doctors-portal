import React from 'react';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';

const infoData = [
    {
        title : 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title : 'Visit Our Location',
        description: 'Brooklyn, NY  10003 USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title : 'Call us now',
        description: '+15697854124',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="row w-75 m-auto">
            {
                infoData.map(info => <InfoCard info={info}></InfoCard>)
            }
        </section>
    );
};

export default BusinessInfo;