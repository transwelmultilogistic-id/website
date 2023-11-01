import React from 'react';
import { Col, Container } from 'react-bootstrap';
import AboutUsPortrait from '../../assets/about-us-image-portrait.jpg';
import { AboutUsHeading, AboutUsText, AboutUsImage, AboutUsTextWrapper, AboutUsRow } from './AboutUs.styled';

const AboutUs = () => {
  return (
    <Container fluid style={{padding: '100px 50px 0px 50px'}} id="About Us">
      <AboutUsRow>
        <Col md={6}>
          <AboutUsImage src={AboutUsPortrait} alt="Transwel Multi Logistic" />
        </Col>
        <Col md={6}>
          <AboutUsHeading>
            PT TRANSWEL MULTI LOGISTICS
          </AboutUsHeading>
          <AboutUsTextWrapper>
            <AboutUsText>
              is a government-licensed and GAFEKSI-approved logistics company in Indonesia. We provide a comprehensive range of services to meet the needs of our domestic and international customers,
            </AboutUsText>
            <br />
            <AboutUsText>
              We are committed to providing our customers with the highest quality of service and support. Our team of experienced and well-trained professionals is dedicated to meeting your needs and exceeding your expectations. We also have a global network of agents who enable us to provide you with seamless service, no matter where your shipment is going.
            </AboutUsText>
          </AboutUsTextWrapper>
        </Col>
      </AboutUsRow>
    </Container>
  )
}

export default AboutUs;