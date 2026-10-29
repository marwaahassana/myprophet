import React from 'react';
import i18n from 'i18next';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Mynavbar from './navbar';
import Myfooter from './footer';
import { useTranslation, initReactI18next } from 'react-i18next';
import { useEffect } from 'react';
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: {
          webname: "Prophet Muhammad (PBUH)",
          chapterlife: "Biography",
          birth: "Birth",
          childhood: "Childhood",
          youth: "Youth",
          passing: "Passing",
          button: "العربية",
          resources: "Resources",
          sitemp: "Site Map",
          about: "About",
          cprt: "© 2026 Prophet Muhammad (PBUH). All rights reserved.",
          design: "Designed by Marwa Hassan"
        }
      },
      ar: {
        translation: {
          webname: "النبي محمد (صلى الله عليه وسلم)",
          chapterlife: "السيرة النبوية",
          birth: "الميلاد",
          childhood: "الطفولة",
          youth: "الشباب",
          passing: "الوفاة",
          button: "English",
          resources: "المصادر",
          sitemp: "خريطة الموقع",
          about: "عن الموقع",
          cprt: "© 2026 النبي محمد (صلى الله عليه وسلم). جميع الحقوق محفوظة.",
          design: "تصميم مروه حسن"
        }
      }
    },
    //Load saved language in i18n config
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });
}

function Appsit() {
  const { t,i18n } = useTranslation();
   const toggleLanguage = () => {
     const newLang = i18n.language === "en" ? "ar" : "en";
      i18n.changeLanguage(newLang);
      //Save language
      localStorage.setItem("lang", newLang);
      // RTL support
      document.body.dir = newLang === "ar" ? "rtl" : "ltr";
    };
  return (  
    <>
        <Mynavbar />
        <Container className="my-5">
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h2 className="mb-3">{t("sitemp")}</h2>
              <p className="text-muted mb-4">Quick links to all pages on this website.
                <br />
                روابط سريعة لجميع صفحات هذا الموقع.
              </p>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <a href="index.html">{t("webname")}</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="birth.html">{t("birth")}</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="childhood.html">{t("childhood")}</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="youth.html">{t("youth")}</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="passing.html">{t("passing")}</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="resources.html">{t("resources")}</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="sitemap.html">{t("sitemp")}</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="about.html">{t("about")}</a>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Container>
        <Myfooter />
    </>
  );
}

export default Appsit;
