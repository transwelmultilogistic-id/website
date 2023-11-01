import React from 'react';
import { Row } from 'react-bootstrap';
import { FaUserAlt, FaShieldAlt, FaTrophy, FaLightbulb } from 'react-icons/fa'
import { OurValuesCardWrapper, OurValuesCol, OurValuesHeading, OurValuesTitle, OurValuesContainer, OurValuesText } from './OurValues.styled';


const OurValues = () => {
  return (
    <OurValuesContainer fluid id="Our Values">
      <Row>
        <OurValuesHeading>Our Values</OurValuesHeading>
        <OurValuesCol>
          <OurValuesCardWrapper>
            <div style={{paddingBottom: 20}}>
              <FaUserAlt size={25} />
            </div>
            <OurValuesTitle><b>1. Customer Centricity</b></OurValuesTitle>
            <OurValuesText>We are committed to putting our customers first and exceeding their expectations. We do this by listening to their needs, understanding their challenges, and providing them with tailored solutions.</OurValuesText>
          </OurValuesCardWrapper>
        </OurValuesCol>
        <OurValuesCol>
          <OurValuesCardWrapper>
            <div style={{paddingBottom: 20}}>
              <FaShieldAlt size={25} />
            </div>
            <OurValuesTitle><b>2. Integrity</b></OurValuesTitle>
            <OurValuesText>We are honest and transparent in all of our dealings with customers, employees, and partners. We believe that integrity is essential to building long-term relationships and trust.</OurValuesText>
          </OurValuesCardWrapper>
        </OurValuesCol>
        <OurValuesCol>
          <OurValuesCardWrapper>
            <div style={{paddingBottom: 20}}>
              <FaTrophy size={25} />
            </div>
            <OurValuesTitle><b>3. Excellence</b></OurValuesTitle>
            <OurValuesText>We are committed to providing our customers with the highest quality of service and support. We continuously strive to improve our processes and offerings in order to meet the ever-changing needs of our customers.</OurValuesText>
          </OurValuesCardWrapper>
        </OurValuesCol>
        <OurValuesCol>
          <OurValuesCardWrapper>
            <div style={{paddingBottom: 20}}>
              <FaLightbulb size={25} />
            </div>
            <OurValuesTitle><b>4. Innovation</b></OurValuesTitle>
            <OurValuesText>We are always looking for new and better ways to serve our customers. We embrace innovation and are committed to staying ahead of the curve in the logistics industry.</OurValuesText>
          </OurValuesCardWrapper>
        </OurValuesCol>
      </Row>
    </OurValuesContainer>
  )
}

export default OurValues;