import React from 'react';
import Row from 'react-bootstrap/Row';
import { ORANGE} from '../../utils/colors';
import {AiFillPhone, AiTwotoneMail} from 'react-icons/ai';
import { COMPANY_EMAIL, COMPANY_MOBILE_NO, MAPS_LINK } from '../../utils/constants';
import LocationMapImage from '../../assets/location-map.png';
import { 
  ContactUsContainer,
  ContactUsCol,
  ContactUsSectionWrapper,
  ContactUsSectionTitle,
  ContactUsAddress,
  ContactUsLocationImage,
  ContactUsSectionOpeningHoursTitle
} from './ContactUs.styled';

const ContactUs = () => {
  const onImageClick = () => {
    window.open(MAPS_LINK, '_blank')
  }

  return (
    <ContactUsContainer id="Contact Us">
      <Row>
        <ContactUsCol md={6}>
          <ContactUsSectionWrapper>
            <ContactUsSectionTitle>
              Contact Us
            </ContactUsSectionTitle>
            <div style={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
              <div style={{width: 30, height: 30, alignSelf: 'start'}}>
                <AiFillPhone size={20} />
              </div>
              <a href={`tel:${COMPANY_MOBILE_NO}`} style={{fontFamily: 'PoppinsRegular', fontSize: '1rem', fontStyle: 'normal', textDecoration: 'none', width: 175, color: ORANGE}}>
                {COMPANY_MOBILE_NO}
              </a>
            </div>
            <div style={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
              <div style={{width: 30, height: 30, alignSelf: 'start'}}>
                <AiTwotoneMail size={20} />
              </div>
              <a href={`mailto:${COMPANY_EMAIL}`} style={{fontFamily: 'PoppinsRegular', fontSize: '1rem', fontStyle: 'normal', textDecoration: 'none', width: 175, color: ORANGE}}>
                {COMPANY_EMAIL}
              </a>
            </div>
            <div style={{textAlign: 'center'}}>
              <ContactUsSectionOpeningHoursTitle>Operational Hours</ContactUsSectionOpeningHoursTitle>
              <span style={{fontSize: 18, fontStyle: 'normal', textAlign: 'center', color: ORANGE}}>
                Mon - Fri: 09:00 - 17:00
              </span>
            </div>
          </ContactUsSectionWrapper>
        </ContactUsCol>
        <ContactUsCol md={6} style={{textAlign: 'center'}}>
          <ContactUsSectionTitle>Address</ContactUsSectionTitle>
          <div>
            <ContactUsLocationImage style={{paddingBottom: 20}} src={LocationMapImage} alt="Transwel Multi Logistic Location" onClick={onImageClick} />
          </div>
          <ContactUsAddress onClick={onImageClick} style={{cursor: 'pointer'}}>
            <address style={{fontSize: 18, fontStyle: 'normal', textAlign: 'center', color: ORANGE}}>
              Jl. Kesehatan Raya No.36 E <br />
              Petojo Selatan - Gambir <br />
              Jakarta Pusat
            </address>
          </ContactUsAddress>
        </ContactUsCol>
      </Row>
    </ContactUsContainer>
  )
}

export default ContactUs;