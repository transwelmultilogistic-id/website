import { Container, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { ORANGE } from '../../utils/colors';

export const OurValuesContainer = styled(Container)`
  padding: 100px 50px 75px 50px;
  /* @media (min-width: 800px) {
    padding-top: 0px;
  } */
`

export const OurValuesHeading = styled.h3`
  text-align: center;
  font-size: 1.8rem;
  padding-bottom: 50px;
  font-family: 'PoppinsBold', 'sans-serif';
  @media (max-width: 800px) {
    padding-bottom: 30px;
  }
`

export const OurValuesCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  @media (max-width: 800px) {
    padding-bottom: 40px;
  }
`

export const OurValuesTitle = styled.span`
  font-size: 1.3rem;
  height: 70px;
  line-height: 1;
  color: ${ORANGE};
  font-family: 'PoppinsBold', 'sans-serif';
  @media (max-width: 800px) {
    height: 40px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    max-width: 80vw;
  }
`

export const OurValuesText = styled.span`
  text-align: justify;
  font-family: 'PoppinsRegular', 'sans-serif';
`

export const OurValuesCol = styled(Col)`
  @media (max-width: 800px) {
    flex-basis: 100%;
  }
`