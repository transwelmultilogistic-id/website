import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const AboutUsRow = styled(Row)`
  @media (max-width: 768px) {
    gap: 20px;
  }
`

export const AboutUsHeading = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  padding-bottom: 50px;
  font-family: 'PoppinsExtraBold', 'sans-serif';
  @media (max-width: 800px) {
    padding-bottom: 30px;
  }
`

export const AboutUsText = styled.h1`
  text-align: center;
  font-size: 1rem;
  padding-bottom: 50px;
  font-family: 'PoppinsRegular', 'sans-serif';
  @media (max-width: 800px) {
    padding-bottom: 30px;
  }
`

export const AboutUsImage = styled.img`
  width: 100%;
  height: 85%;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 100%;
  }
`
export const AboutUsTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`