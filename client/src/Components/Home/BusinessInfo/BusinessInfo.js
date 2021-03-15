import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

const infoData = [
    {
        title : 'Opening Hours',
        description: 'We are open 7 days',
        icon: '',
        background: 'primary'
    },
    {
        title : 'Visit Our Location',
        description: 'Brooklyn, NY  10003 USA',
        icon: '',
        background: 'dark'
    },
    {
        title : 'Call us now',
        description: '+15697854124',
        icon: '',
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="row">
            {
                infoData.map(info => <InfoCard info={info}></InfoCard>)
            }
        </section>
    );
};

export default BusinessInfo;