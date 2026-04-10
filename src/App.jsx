import React from 'react';
import i18n from 'i18next';
import Mynavbar from './components/navbar';
import Myfooter from './components/footer';
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
          passing: "Passing",
          button: "العربية",
          info:{
            Name: "Muhammad ibn Abdullah, ibn Abdul-Muttalib",
            Message: "The Islam",
            Birth :"Born in the Year of the Elephant in Mecca",
            Appellation: "Abu al-Qasim",
            Mother: "Amina bint Wahb",
            Passing: "The eleventh year of the Hijra"
          },
          resources: "Resources",
          faq: "FAQ",
          contact: "Contact",
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
          info:{
            الإسم: "محمَّد بن عبد الله، بن عبد المطلب",
            الرسالة: "الإسلام",
            الولادة :"عام الفيل بمكة المكرمة",
            الكنية: "أبو القاسم",
            الأم: "آمنة بنت وهب", 
            الوفاة:"السنة الحادية عشرة من الهجرة"
          },
          resources: "المصادر",
          faq: "الأسئلة الشائعة",
          contact: "اتصل بنا",
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

function App(){
const { t, i18n } = useTranslation();

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
             </Col>
             {/* Information Section */}
             <Col md={8} className="p-4 bg-light">
              <div>
                {Object.entries(t("info", { returnObjects: true })).map(([key, value]) => (
                <p key={key}>
                {t(key)} : {value}
                </p>
             ))}
              </div>
             </Col>
           </Row>
         </Card>
       </Col>
     </Row>
   </Container>
   <Myfooter /> 
  </>
 );
};
export default App;