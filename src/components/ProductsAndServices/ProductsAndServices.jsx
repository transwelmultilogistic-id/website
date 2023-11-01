import React from 'react';
import Row from 'react-bootstrap/Row';
import { ProductsAndServicesContainer, ProductsAndServicesContainerTitle, ProductsAndServicesProductWrapper, ProductsAndServicesProductTitle, ProductsAndServicesCol } from './ProductsAndServices.styled';

const ProductsAndServices = () => {
  return (
    <ProductsAndServicesContainer id='Services' fluid>
      <ProductsAndServicesContainerTitle>Our Services</ProductsAndServicesContainerTitle>
        <Row>
          <ProductsAndServicesCol md={6}>
            <ProductsAndServicesProductWrapper>
              <ProductsAndServicesProductTitle>International Ocean Freight</ProductsAndServicesProductTitle>
            </ProductsAndServicesProductWrapper>
          </ProductsAndServicesCol>

          <ProductsAndServicesCol md={6}>
            <ProductsAndServicesProductWrapper>
              <ProductsAndServicesProductTitle>Distribution</ProductsAndServicesProductTitle>
            </ProductsAndServicesProductWrapper>
          </ProductsAndServicesCol>

          <ProductsAndServicesCol md={6}>
            <ProductsAndServicesProductWrapper>
              <ProductsAndServicesProductTitle>Air Freight</ProductsAndServicesProductTitle>
            </ProductsAndServicesProductWrapper>
          </ProductsAndServicesCol>

          <ProductsAndServicesCol md={6}>
            <ProductsAndServicesProductWrapper>
              <ProductsAndServicesProductTitle>Heavy Lift Cargo</ProductsAndServicesProductTitle>
            </ProductsAndServicesProductWrapper>
          </ProductsAndServicesCol>

            <ProductsAndServicesCol md={6}>
              <ProductsAndServicesProductWrapper>
                <ProductsAndServicesProductTitle>Break Bulk</ProductsAndServicesProductTitle>
              </ProductsAndServicesProductWrapper>
            </ProductsAndServicesCol>

            <ProductsAndServicesCol md={6}>
              <ProductsAndServicesProductWrapper>
                <ProductsAndServicesProductTitle>Plants</ProductsAndServicesProductTitle>
              </ProductsAndServicesProductWrapper>
            </ProductsAndServicesCol>

            <ProductsAndServicesCol md={6}>
              <ProductsAndServicesProductWrapper>
                <ProductsAndServicesProductTitle>Customs Clearance</ProductsAndServicesProductTitle>
              </ProductsAndServicesProductWrapper>
            </ProductsAndServicesCol>

            <ProductsAndServicesCol md={6}>
              <ProductsAndServicesProductWrapper>
                <ProductsAndServicesProductTitle>Project Cargo</ProductsAndServicesProductTitle>
              </ProductsAndServicesProductWrapper>
            </ProductsAndServicesCol>

            <ProductsAndServicesCol md={6}>
              <ProductsAndServicesProductWrapper>
                <ProductsAndServicesProductTitle>Warehousing</ProductsAndServicesProductTitle>
              </ProductsAndServicesProductWrapper>
            </ProductsAndServicesCol>

            <ProductsAndServicesCol md={6}>
              <ProductsAndServicesProductWrapper>
                <ProductsAndServicesProductTitle>Chemical and Raw Materials</ProductsAndServicesProductTitle>
              </ProductsAndServicesProductWrapper>
            </ProductsAndServicesCol>

            <ProductsAndServicesCol md={6}>
              <ProductsAndServicesProductWrapper>
                <ProductsAndServicesProductTitle>Logistic Management</ProductsAndServicesProductTitle>
              </ProductsAndServicesProductWrapper>
            </ProductsAndServicesCol>
        </Row>
    </ProductsAndServicesContainer>
  )
}

export default ProductsAndServices