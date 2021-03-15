import React from 'react';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4">
            <div>
                <h6>{info.title}</h6>
                <small>{info.description}</small>
            </div>            
        </div>
    );
};

export default InfoCard;