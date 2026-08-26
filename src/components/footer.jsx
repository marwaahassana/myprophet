import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
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
  <footer className="site-footer mt-5">
    <Container className="text-center py-4">
      <Nav className="justify-content-center mb-3">
        <Nav.Link href="resources.html">{t("resources")}</Nav.Link>
        <Nav.Link href="sitemap.html">{t("sitemp")}</Nav.Link>
        <Nav.Link href="about.html">{t("about")}</Nav.Link>
      </Nav>

      {/* Footer Text */}
      <p className="mb-1">{t("cprt")}</p>
      <p className="mb-0">{t("design")}</p>
    </Container>
  </footer>
</>

);
}
export default Myfooter;