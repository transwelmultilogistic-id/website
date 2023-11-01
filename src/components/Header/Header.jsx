import React, { useState } from 'react';
import { DesktopMenuWrapper, MobileMenuWrapper, HeaderLogo, HeaderLogoImage, HeaderMenuList, HeaderNavArea, MenuItemLink, OurProjectsLink, HeaderColumn, OurProjectsLinkMobile, MenuItemLinkMobile } from "./Header.styled";
import { menuItems } from '../../utils/constants'
import companyLogo from '../../assets/logo.png';
import { Row } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';
import { slide as Menu } from 'react-burger-menu';

import '../../App.css';
import { BLACK } from '../../utils/colors';

const Header = () => {

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleSidebarOpen = () => {
    setOpenMobileMenu(true);
  }

  const handleSidebarClose = () => {
    setOpenMobileMenu(false);
  }

  return (
    <header>
      <HeaderNavArea fluid>
        <Row>
          <HeaderColumn>
            <HeaderLogo>
              <HeaderLogoImage src={companyLogo} alt="Company Logo" />
            </HeaderLogo>
            <DesktopMenuWrapper role="navigation">
              <HeaderMenuList>
                {menuItems.map((menu) => {
                  if(menu === "Our Projects") {
                    return (
                      <OurProjectsLink key={menu}>{menu}</OurProjectsLink>
                    )
                  }
                  return (
                    <MenuItemLink key={menu} to={`#${menu}`}>{menu}</MenuItemLink>
                  );
                })}
              </HeaderMenuList>
            </DesktopMenuWrapper>
            <MobileMenuWrapper role="navigation">
              <Menu 
                width="60%" 
                menuClassName="burger--menu" 
                right 
                onOpen={handleSidebarOpen} 
                onClose={handleSidebarClose} 
                isOpen={openMobileMenu} 
                customBurgerIcon={
                  <GiHamburgerMenu size={25} />
                } 
                customCrossIcon={
                  <RiCloseFill size={33} color={BLACK} />
                }
              >
                {menuItems.map((menu) => {
                  if(menu === "Our Projects") {
                    return (
                      <OurProjectsLinkMobile key={menu}>{menu}</OurProjectsLinkMobile>
                    )
                  }
                  return (
                    <MenuItemLinkMobile key={menu} to={`#${menu}`}>{menu}</MenuItemLinkMobile>
                  );
                })}
              </Menu>
            </MobileMenuWrapper>
          </HeaderColumn>
        </Row>
      </HeaderNavArea>
    </header>
  )
}

export default Header;