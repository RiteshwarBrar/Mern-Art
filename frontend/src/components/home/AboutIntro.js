import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutIntro = () => {
    return (
        <section className="about-me">
        <Container >
            <Row className="align-items-center">
                <Col lg={12} md={12} sm={12}>
                    <p className='Aboutme-quote'> "If I could say it in words there would be no reason to paint" -Edward Hopper</p>
                </Col>
                {/* <Col lg={2} md={5} sm={12}>
                    <img 
                        src="path/to/artist-picture.jpg" 
                        alt="Artist" 
                        className="img-fluid artist-picture"
                    />
                </Col>
                <Col lg={8} md={7} sm={12}>
                    <div className="description">
                        <h2>About the Artist</h2>
                        <p>
                            [Artist's Name] is a passionate artist who specializes in [type of art]. With a background in [artist's background], they have developed a unique style that combines [elements of style]. Their work has been featured in [exhibitions, galleries, publications], and they have a loyal following of art enthusiasts.
                        </p>
                        <p>
                            [Artist's Name] draws inspiration from [sources of inspiration] and believes in [artist's philosophy or mission]. They continue to explore new techniques and push the boundaries of their medium, creating pieces that are both thought-provoking and visually stunning.
                        </p>
                    </div>
                </Col> */}
                {/* <Col lg={2} md={5} sm={12}>
                    <Button className="learn-more" href="/About">Learn more</Button>
                </Col> */}
            </Row>
        </Container>
        </section>
    );
};

export default AboutIntro;
