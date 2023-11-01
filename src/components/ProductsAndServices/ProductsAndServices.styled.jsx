import styled from 'styled-components';
import {Container, Col} from 'react-bootstrap';
import { BLACK, WHITE, ORANGE } from '../../utils/colors';

export const ProductsAndServicesContainer = styled(Container)`
  background-color: ${BLACK};
  color: ${WHITE};
  padding: 100px 50px 100px 50px;
  /* @media (min-width: 800px) {
    padding-top: 0px;
  } */
`

export const ProductsAndServicesContainerTitle = styled(Container)`
  text-align: center; 
  padding-bottom: 50px;
  font-size: 1.8rem;
  font-family: 'PoppinsBold', 'sans-serif';
  color: ${ORANGE};
`

export const ProductsAndServicesCol = styled(Col)`
  font-family: 'PoppinsRegular', 'sans-serif';
  padding-bottom: 20px;
  padding-right: 4px;
  @media (max-width: 768px) {
    padding-right: 0px;
  }
`

export const ProductsAndServicesProductWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const ProductsAndServicesProductTitle = styled.h4`
  color: ${WHITE};
  font-size: 1rem;
  margin-bottom: 0px;
`