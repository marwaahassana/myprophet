import React from 'react';
import i18n from 'i18next';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
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
          aboutTitle: "About This Website",
          aboutIntro: "This website presents selected moments from the life of Prophet Muhammad (PBUH).",
          aboutGoal: "Its goal is to provide a simple and respectful introduction for readers in both English and Arabic.",
          aboutNote: "The content is educational and based on trusted Islamic references listed on the Resources page.",
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
          aboutTitle: "عن هذا الموقع",
          aboutIntro: "هذا الموقع يقدم لحظات مختارة من حياة النبي محمد (صلى الله عليه وسلم).",
          aboutGoal: "هدفه هو تقديم مقدمة بسيطة ومحترمة للقراء في اللغة الإنجليزية والعربية.",
          aboutNote: "المحتوى تعليمي ويستند إلى مراجع إسلامية موثوقة مذكورة في صفحة المصادر.",
          cprt: "© 2026 النبي محمد (صلى الله عليه وسلم). جميع الحقوق محفوظة.",
          design: "تصميم مروه حسن"
        }
      }
    },
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });
}

function Appabt() {
  const { t } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    document.body.dir = savedLang === "ar" ? "rtl" : "ltr";
  }, []);

  return (
    <>
      <Mynavbar />
      <Container className="my-5">
        <Card className="shadow-sm border-0">
          <Card.Body className="p-4 p-md-5">
            <h2 className="mb-3">{t("aboutTitle")}</h2>
            <p className="mb-3">{t("aboutIntro")}</p>
            <p className="mb-3">{t("aboutGoal")}</p>
            <p className="mb-0 text-muted">{t("aboutNote")}</p>
          </Card.Body>
        </Card>
      </Container>
      <Myfooter />
    </>
  );
}

export default Appabt;
