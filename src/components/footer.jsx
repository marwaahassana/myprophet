import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';

function Myfooter(){
  const { t,i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    //Save language
    localStorage.setItem("lang", newLang);
    // RTL support
    document.body.dir = newLang === "ar" ? "rtl" : "ltr";
    };
return(
  <>
  <Navbar expand="lg" className="bg-body-secondary shadow mt-5">
    <Container className="flex-column text-center">
      
      <Nav className="justify-content-center mb-2">
        <Nav.Link href="resources.html">{t("resources")}</Nav.Link>
        <Nav.Link href="faq.html">{t("faq")}</Nav.Link>
        <Nav.Link href="contact.html">{t("contact")}</Nav.Link>
      </Nav>

      {/* Footer Text */}
      <p className="mb-0">{t("cprt")}</p>
      <p className="mb-0">{t("design")}</p>

    </Container>
  </Navbar>
</>

);
}
export default Myfooter;