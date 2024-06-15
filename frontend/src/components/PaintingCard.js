import React from 'react';

const PaintingCard = (params) => {
    return (
        <div className="painting-card">
            <h2>{params.painting.title}</h2>
            <p>Date: {params.painting.date}</p>
            <p>{params.painting.description}</p>
        </div>
    );
};

export default PaintingCard;