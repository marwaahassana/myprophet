import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';


function Mynavbar(){
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
    <Navbar expand="lg" className="bg-body-secondary shadow">
      <Container>
        <Navbar.Brand href="index.html" className="fw-bold">
          Prophet Muhammad (PBUH)  النبي محمد ﷺ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="index.html">{t("webname")}</Nav.Link>
            <NavDropdown title={t("chapterlife")} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">{t("birth")}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                {t("childhood")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">{t("youth")}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                {t("death")}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
           <Button variant="outline-secondary" onClick={toggleLanguage}>
            {t("button")}
           </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

);
};
export default Mynavbar;