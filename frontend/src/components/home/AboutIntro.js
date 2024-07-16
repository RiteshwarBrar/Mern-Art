import React from 'react';

const AboutIntro = () => {
    return (
        <div className="about-me">
                <h2 className='Aboutme-title'>A Word From The Artist</h2>
                <hr className='divider'></hr>
                <p className='Aboutme-quote'>"If I could say it in words there would be no reason to paint" -Edward Hopper</p>
                <p className='Aboutme-info'>
                In the ever varying journey of life, where dynamics with your friends and family changes with time, you experience love and loss, the closeness and distance of relationships but painting has been my only constant since the age of 3.</p>
                <p className='Aboutme-info'>
                It has been a medium of expression and putting my perspective forward, allowing me to showcase how I see the world. Sometimes a shade darker, sometimes a tone lighter, sometimes with an extra stroke of emotion.
                </p>
                <div className='Follow'>
                    <p>Follow Nimrat's Artwork on Instagram</p>
                    <a className="insta" href="https://www.instagram.com/nimrat.brar_acrylic.art" target="_blank" rel="noreferrer">@nimrat.brar_acrylic.art</a>
                </div>
        </div>
    );
};

export default AboutIntro;
