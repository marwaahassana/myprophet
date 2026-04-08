import React from 'react';
import i18n from 'i18next';
import Mynavbar from './components/navbar';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { useTranslation, initReactI18next } from 'react-i18next';
import { useEffect } from "react";
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
          death: "Passing",
          button: "العربية",
          name: "Prophet Muhammad (PBUH)",
          title: "The Last Prophet",
          bio: "Prophet Muhammad (PBUH) is the founder of Islam and is considered the last prophet in Islamic tradition.",
          teachingsTitle: "Teachings:",
          teachings: [
            "Monotheism: The belief in one God (Allah) is central to Islam.",
            "Compassion: Showing mercy and kindness to all living beings.",
            "Justice: Treating everyone fairly and standing up for the oppressed."
          ]
        }
      },
      ar: {
        translation: {
          webname: "النبي محمد (صلى الله عليه وسلم)",
          chapterlife: "السيرة النبوية",
          birth: "الميلاد",
          childhood: "الطفولة",
          youth: "الشباب",
          death: "الوفاة",
          button: "English",
          name: "النبي محمد ﷺ",
          title: "خاتم الأنبياء",
          bio: "النبي محمد ﷺ هو مؤسس الإسلام ويعتبر آخر الأنبياء في العقيدة الإسلامية.",
          teachingsTitle: "التعاليم:",
          teachings: [
            "التوحيد: الإيمان بإله واحد.",
            "الرحمة: الرحمة واللطف مع جميع الكائنات.",
            "العدل: معاملة الجميع بعدل."
          ]
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

function App(){
 const { t } = useTranslation();
 const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    document.body.dir = savedLang === "ar" ? "rtl" : "ltr";
  }, []);
 return(
 <>
   <Mynavbar />
   <Container className="py-5 ">
     <Row className="justify-content-center">
       <Col md={10} lg={8}>
         <Card className="shadow-lg border-0 overflow-hidden">
           <Row className="g-0">
             {/* Image Section */}
             <Col md={4} className="bg-dark text-white text-center p-4">
               <div className="mb-3 mt-4">
                 <img
                   src="/images/muhammadphoto.jpg"
                   alt="Profile"
                   className="rounded-circle border border-4 border-secondary shadow" />
               </div>
               <h3 className="fw-bold">{t("name")}</h3>
               <p className="text-secondary">{t("title")}</p>
             </Col>
             {/* Content Section */}
             <Col md={8} className="p-4 bg-light">
               <p className="text-muted mb-4">{t("bio")}</p>
               <hr />
               <h5 className="fw-bold mb-3">{t("teachingsTitle")}</h5>
               {Array.isArray(t("teachings", { returnObjects: true })) &&
               t("teachings", { returnObjects: true }).map((tchng, index) => (
                 <div key={index} className="mb-3">
                   <div className="d-flex justify-content-between mb-1">
                     <span className="fw-bold">{tchng}</span>
                   </div>
                 </div>
               ))}
             </Col>
           </Row>
         </Card>
       </Col>
     </Row>
   </Container>
  </>
 );
};
export default App;