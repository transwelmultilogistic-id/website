import Header from '../../components/Header/Header';
import LogoSection from '../../components/LogoSection/LogoSection';
import ProductsAndServices from '../../components/ProductsAndServices/ProductsAndServices';

import ContactUs from '../../components/ContactUs/ContactUs';
import WhatsappFloatingButton from '../../components/WhatsappFloatingButton/WhatsappFloatingButton';
import OurValues from '../../components/OurValues/OurValues';
import AboutUs from '../../components/AboutUs/AboutUs';



const Home = () => {
  return (
    <>
      <Header />
      <LogoSection />
      <AboutUs />
      <ProductsAndServices />
      <OurValues />
      <ContactUs />
      <WhatsappFloatingButton />
    </>
  );
}

export default Home;
