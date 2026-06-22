import React from 'react';
import i18n from 'i18next';
import Mynavbar from './components/navbar';
import Myfooter from './components/footer';
import Myhadith from './components/hadith';
import { Container, Row, Col, Card, Carousel} from 'react-bootstrap';
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
          info:{
            Name: "Muhammad ibn Abdullah, ibn Abdul-Muttalib",
            Message: "The Islam",
            Birth :"Born in the Year of the Elephant in Mecca",
            Appellation: "Abu al-Qasim",
            Mother: "Amina bint Wahb",
            Passing: "The eleventh year of the Hijra"
          },
          hdth: "The hadith",
          clckhdthbtn: "Click the button to load the hadith",
          randomHadith: "Pick Hadith",
          resources: "Resources",
          sitemp: "Sitemap",
          about: "About",
          cprt: "© 2026 Prophet Muhammad (PBUH). All rights reserved.",
          design: "Designed by Marwa Hassan",
          nuzulalwahy: "The Moment of Revelation",
          revelationDesc: "The revelation descended on Monday 17th of Ramadan",
          alisra:"The Isra and Mi'raj",
          alisraDesc: "The night journey and ascension of the Prophet ﷺ",
          hijra: "The Hijra",
          hijraDesc: "The migration of the Prophet ﷺ from Mecca to Medina"
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
          hdth: "الحديث",
          clckhdthbtn: "اضغط الزر لتحميل الحديث",
          randomHadith: "اختر حديث",
          resources: "المصادر",
          sitemp: "خريطة الموقع",
          about: "عن الموقع",
          cprt: "© 2026 النبي محمد (صلى الله عليه وسلم). جميع الحقوق محفوظة.",
          design: "تصميم مروه حسن",
          nuzulalwahy:"نزول الوحي",
          revelationDesc: "وقت نزول الوحي في يوم الإثنين لسبع عشرة خلت من رمضان.",
          alisra:"الإسراء والمعراج",
          alisraDesc: "رحلة النبي ﷺ الليلية ومعراجه إلى السماوات",
          hijra: "الهجرة",
          hijraDesc: "هجرة النبي ﷺ من مكة إلى المدينة"
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
         <Carousel className="py-5 ">
          <Carousel.Item>
          <a href="/iqraa.html">
          <img
           className="d-block w-100"
           src="/images/iqra.png"
           alt="Nuzul Al-Wahy illustration"
          /></a>
          <Carousel.Caption>
           <h3>({t('nuzulalwahy')})</h3>
           <p>{t('revelationDesc')}</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <a href="/isra.html">
          <img
           className="d-block w-100"
           src="/images/isra.png"
           alt="al-isra wal-mi'raj illustration"
          /></a>
          <Carousel.Caption>
           <h3>({t('alisra')})</h3>
           <p>{t('alisraDesc')}</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="/hijra.html">
          <img
           className="d-block w-100"
           src="/images/hijra.png"
           alt="Hijra illustration"
          /></a>
          <Carousel.Caption>
           <h3>({t('hijra')})</h3>
           <p>{t('hijraDesc')}</p>
          </Carousel.Caption>
          </Carousel.Item>
         </Carousel>
         <Card className="shadow-lg border-0 overflow-hidden">
           <Row className="g-0">
             {/* Image Section */}
             <Col md={4} className="bg-dark text-white text-center p-4">
               <div className="mb-3 mt-4">
                 <img
                   src="/images/muhamad.png"
                   alt="Profile"
                   className="rounded-circle border border-4 border-dark bg-light shadow" />
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
         <Myhadith />
       </Col> 
     </Row>
   </Container>
   <Myfooter /> 
  </>
 );
};
export default App;