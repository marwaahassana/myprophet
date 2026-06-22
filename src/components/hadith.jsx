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
      const res = await fetch(
        "https://hadithapi.com/api/hadiths?apiKey=$2y$10$lVyOQVLKArlB38uo8hrbOu2we26LZ8QlHfM66d7S3eRBW52Mwnm"
      );
      const data = await res.json();

      const list = data.hadiths.data;
      const random = list[Math.floor(Math.random() * list.length)];

      setHadith(random);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };


return(
            <div>
              {/* Hadith Card */}
              <Card className="shadow border-0 text-center p-4 mt-4 bg-light">
                <h4 className="mb-3"> {t("hdth")} </h4>
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

            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Button variant="outline-secondary" onClick={getRandomHadith} className="mt-3">
                  {t("randomHadith")}
                </Button>
            </div>
              </Card>
            </div>
);
};
export default Myhadith;
