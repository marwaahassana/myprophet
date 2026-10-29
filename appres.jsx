import React from 'react';
import i18n from 'i18next';
import Table from 'react-bootstrap/Table';
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

function Appres() {
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
    <Table hover borderless className="resources-table">
      <thead>
        <tr>
          <th>#</th>
          <th>The Source المصدر</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Sahih Bukhari صحيح البخاري </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sahih Muslim صحيح مسلم</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Sunan al-Tirmidhi سنن الترمذي</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Sunan Abu Dawood سنن أبي داود</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Sunan Ibn-e-Majah سنن ابن ماجه</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Sunan An-Nasa'i سنن النسائي</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Mishkat Al-Masabih مشكاة المصابيح</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Musnad Ahmad مسند أحمد</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Silsalat al-Hadith as-Sahiha سلسلة الأحاديث الصحيحة</td>
        </tr>
        <tr>
          <td>10</td>
          <td>موسوعة الثقافة التاريخية والأثرية والحضارية التاريخ الإسلامي 4  الرسول (صلى الله عليه وسلم) وبناء الدولة الإسلامية أ.د. حسن على حسن</td>
        </tr>
      </tbody>
    </Table>
        <Myfooter />
    </>
  );
}

export default Appres;