import styled from 'styled-components';
import { BLACK, ORANGE, HOVER_ITEM_COLOR, WHITE } from '../../utils/colors';
import { Col, Container, Button } from 'react-bootstrap';

export const HeaderNavArea = styled(Container)`
  margin: 0 auto;
  padding: 10px 50px;
  background-color: ${WHITE};
  position: fixed;
  left: 0;
  z-index: 9999;
  top: 0;
  color: ${BLACK};
  font-family: 'RussoOne', 'sans-serif';
`

export const HeaderColumn = styled(Col)`
  display: flex;
  align-items: center; 
  justify-content: space-between;
  @media (max-width: 1070px) {
    justify-content: space-between;
  }
`

export const HeaderLogo = styled.div`
  color: inherit;
  font-size: 25px;
  margin-right: 20px;
  text-decoration: none;
  width: 70px;
  height: 70px;
`

export const HeaderLogoImage = styled.img`
  height: inherit;
  width: inherit;
  object-fit: cover;
`

export const HeaderMenuList = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
`

export const MenuItemLink = styled.a`
  display: block;
  font-size: inherit;
  color: inherit;
  text-decoration: none;
  text-align: left;
  padding: 0.7rem 1rem;

  &:hover {
    color: ${WHITE};
    background-color: ${HOVER_ITEM_COLOR};
  }
`

export const MenuItemLinkMobile = styled.a`
  display: block;
  font-size: inherit;
  color: ${BLACK};
  text-decoration: none;
  text-align: left;
  padding: 1rem;
  font-size: 1.5rem;

  &:hover {
    color: ${BLACK};
    background-color: ${HOVER_ITEM_COLOR};
  }
`

export const OurProjectsLink = styled(Button)`
  display: block;
  font-size: inherit;
  color: ${BLACK};
  text-decoration: none;
  text-align: left;
  padding: 0.7rem 1rem;
  background-color: ${ORANGE};
  margin-right: 10px;
  border: none;
  border-radius: 0;
  /* width: 100%; */
  font-family: 'RussoOne', 'sans-serif';
  &:hover {
    color: ${WHITE};
    background-color: ${HOVER_ITEM_COLOR};
  }

  &:active {
    color: ${BLACK} !important;
    background-color: ${HOVER_ITEM_COLOR} !important;
    border-color: none !important;
  }

  &:disabled {
    color: ${BLACK} !important;
    background-color: ${HOVER_ITEM_COLOR} !important;
    border-color: none !important;
  }
`

export const OurProjectsLinkMobile = styled(Button)`
  display: block;
  font-size: inherit;
  color: ${BLACK};
  text-decoration: none;
  text-align: left;
  padding: 1rem;
  font-size: 1.5rem;
  margin: 1rem 0;
  background-color: ${ORANGE};
  border: none;
  border-radius: 0;
  width: 100%;

  &:hover {
    color: ${WHITE};
    background-color: ${HOVER_ITEM_COLOR};
  }

  &:active {
    color: ${BLACK} !important;
    background-color: ${HOVER_ITEM_COLOR} !important;
    border-color: none !important;
  }

  &:disabled {
    color: ${BLACK} !important;
    background-color: ${HOVER_ITEM_COLOR} !important;
    border-color: none !important;
  }
`

export const DesktopMenuWrapper = styled.nav`
  display: block;
  @media (max-width: 1070px) {
    display: none;
  }
`

export const MobileMenuWrapper = styled.nav`
  display: none;
  @media (max-width: 1070px) {
    display: block;
  }
`

export const MenuToggleInput = styled.input`
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
`