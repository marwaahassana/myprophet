import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';


function Myhadith(){
const { t,i18n } = useTranslation();

const [hadith, setHadith] = useState(null);
const [loading, setLoading] = useState(false);

 const toggleLanguage = () => {
   const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    //Save language
    localStorage.setItem("lang", newLang);
    // RTL support
    document.body.dir = newLang === "ar" ? "rtl" : "ltr";
  }; 
   
 const getRandomHadith = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/hadith");

      if (!response.ok) {
        throw new Error("Failed to fetch hadith");
      }

      const data = await response.json();

      setHadith(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


return(
        <Container className="my-5">
              {/* Hadith Card */}
          <Card  className="hadith-card border-0">
           <Card.Header className="hadith-header">
            <h3 className="mb-0 text-center">{t("hdth")}</h3>
           </Card.Header>
           <Card.Body className="text-center">
                {loading ? (
                <Spinner animation="border" />
                ) : hadith ? (
                <>
                {i18n.language === "ar" ? (
                <p>{hadith.hadithArabic}</p>
                ) : (
                <p>{hadith.hadithEnglish}</p>
                )}
                </>
                ) : (
                <p>{t("clckhdthbtn")}</p>
                )}
                <Button className="language-btn mt-4" onClick={getRandomHadith} className="mt-3">
                  {t("randomHadith")}
                </Button>
              </Card.Body> 
          </Card>
        </Container>
);
};
export default Myhadith;
