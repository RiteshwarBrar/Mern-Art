import React from 'react';

const CustomBanner = () => {
    const vendorEmail = "mailto:nik1359@outlook.com"; // Replace with the vendor's email address
    const subject = "Custom Painting Request";

    const handleEmailClick = () => {
        window.location.href = `mailto:${vendorEmail}?subject=${encodeURIComponent(subject)}`;
    };

    return (
        <div className="custom-order-banner">
            <h2>Didn't find the perfect painting?</h2>
            <p>If you couldn't find a painting that suits your needs, we offer custom painting services. Let us create something special just for you!</p>
            <p>Send us an email with your requirements and we will see what we can do.</p>
            <button onClick={handleEmailClick} className="custom-order-button">
                Request Custom Artwork
            </button>
            
        </div>
    );
};

export default CustomBanner;