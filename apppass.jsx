import React from 'react';
import i18n from 'i18next';
import Mynavbar from './navbar';
import Myfooter from './footer';
import { Container, Card } from "react-bootstrap";
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
          design: "Designed by Marwa Hassan",
          articlepassing:`
          The Farewell Pilgrimage took place in Dhu al-Qi‘dah of the tenth year after the Hijrah. The Prophet ﷺ gave permission to his companions to perform Hajj, and the Muslims prepared to accompany him on his pilgrimage. It was a large gathering that included the Muhajirun (Emigrants), the Ansar (Helpers), and other tribes. Their number reached nearly one hundred thousand Muslims. This vast crowd set out toward Mecca to perform the rites of Hajj and to learn the obligations of their religion directly from the Messenger of Allah.

In the plain of Arafat, the Prophet ﷺ stood and addressed the Muslims, outlining for them the principles of Islam and the foundations of the religion. Among what he said was: “O people, listen to my words, for I do not know if I will meet you again after this year in this place. O people, your blood and your wealth are sacred to one another until you meet your Lord, just as the sanctity of this day of yours and this month of yours. You will meet your Lord and He will ask you about your deeds.”

The Messenger of Allah ﷺ continued his sermon, in which he declared the principles by which they should live and the bonds that connect Muslims. He explained that these relationships are based on the prohibition of transgressing against people’s wealth and honor, and that the measure of faith is righteous deeds that a person offers for himself and his society. He also emphasized that honesty in wealth and work—both in private and public life—is the foundation of relationships between people. Islam prohibited usury (riba) because of the hatred and resentment it generates among individuals. The Prophet ﷺ also explained in his sermon how Satan lies in wait for them, striving to reach their hearts, souls, and actions.

He also forbade tampering with the sacred months and defined them for them. Then the Prophet ﷺ addressed the family relationship, which is a crucial bond through which society is made sound when it is sound. He advised men to treat women kindly, to care for them, and to provide for them and clothe them. In this way, children grow up in an atmosphere of love and compassion, becoming tools of construction and reform in society. He concluded his sermon by emphasizing the relationship of brotherhood and affection that binds a Muslim to another Muslim. Thus, he defined the general relationships among Muslims, which are based on love and equality.

The Death of the Messenger of Allah ﷺ

The Prophet ﷺ completed the rites of Hajj and then returned to Medina. Only two months passed before he fell ill. He asked permission from his wives to be nursed in the house of Aisha, and when his illness became severe, he went out to his companions and ascended the pulpit, saying: “O gathering of Muhajirun and Ansar, treat the Ansar well, for people are increasing, while the Ansar remain as they are and do not increase. They were my closest companions to whom I turned for refuge, so be good to those who do good among them and overlook those who make mistakes.”

The Prophet ﷺ instructed Abu Bakr to lead the people in prayer during his illness. Then, on Monday, the 13th of Rabi‘ al-Awwal in the 11th year of Hijrah, corresponding to June 8, 633 CE, the Prophet ﷺ passed away and joined the Highest Companion.

The Companions were shocked by the great calamity and could not believe the news of the Prophet’s death until Abu Bakr came out and recited the words of Allah, the Exalted:

“And Muhammad is but a messenger; messengers have passed on before him. So if he dies or is killed, will you turn back on your heels? And whoever turns back on his heels will never harm Allah at all; and Allah will reward the grateful.” (Aal ‘Imran 3:144)

At that moment, the Muslims came to terms with the painful reality and began facing life without their supreme leader and great teacher, who left among them the Book of Allah and his purified Sunnah.
          `
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
          design: "تصميم مروه حسن",
          articlepassing:`
حجة الوداع
في ذي القعدة من العام العاشر للهجرة أذن النبي له في أصحابه بالحج، وتجهز المسلمون لمصاحبة النبي صلى الله عليه وسلم في حجه، وكان حشدا كبيرا ضم المهاجرين والأنصار وبقية القبائل، وبلغ عددهم ما يقرب من مائة ألف مسلم، وخرج هذا الجمع الزاخر قاصدا مكة لأداء مناسك الحج وليتعلم المسلمون فرائض دينهم من رسول الله . . وفي ساحة عرفات وقف النبي صلى الله عليه وسلم يخطب المسلمين ويحدد لهم مبادئ الإسلام وقواعد الدين، ومما جاء فيها:
«أيها الناس اسمعوا قولى فإني لا أدرى لعلى لا ألقاكم بعد عامي هذا بهذا الموقف أبدا، أيها الناس إن دماءكم وأموالكم عليكم حرام إلى أن تلقوا ربكم كحرمة يومكم هذا وحرمة شهركم هذا، وستلقون ربكم فيسألكم عن أعمالكم.
واستمر رسول الله له في خطبته وفيها أعلن لهم المبادئ التي يسيرون عليها والعلاقة التي تربط بين المسلمين، وكيف أنها تقوم على تحريم الاعتداء على الأموال والأعراض وأن مقياس الإيمان هو العمل الصالح الذى يقدمه الفرد لنفسه ،ولمجتمعه، وأن قاعدة العلاقات بين الناس هي الأمانة في المال والعمل فى الحياة الخاصة والعامة على حد سواء، وأن الإسلام حرم الربا لما يحدثه من كراهية وحقد بين الأفراد، وأوضح لهم النبي الله في خطبته كيف أن الشيطان لهم بالمرصاد يحاول جاهدا النفاد إلى قلوبهم ونفوسهم وإلى أعمالهم. كما حرم عليهم التلاعب بالأشهر الحرم وحددها لهم.
ثم تطرق النبي صلى الله عليه وسلم إلى العلاقة الأسرية وهي علاقة هامة بصلاحهـا يصلح المجتمع وأوصى الرجال بمعاملة النساء معاملة طيبة والحفاظ عليهن ورزقهن وكسوتهن، وبذلك ينشأ الأبناء في جو من الحب والتعاطف ويكونون أدوات بناء وإصلاح في المجتمع وختم خطبته

بالتركيز على علاقة الأخوة والمودة التى تربط المسلم بأخيه المسلم. بذلك حدد
العلاقات العامة بين المسلمين التي تبنى على الحب والمساواة .
وفاة الرسول صلى الله عليه وسلم
أكمل الرسول صلى الله عليه وسلم مناسك الحج ثم عاد إلى المدينة ولم يمض سوى شهرين حتى مرض النبي صلى الله عليه وسلم فاستأذن نساءه فى أن يُمَرض فى بيت عائشة، ولما اشتد عليه المرض خرج إلى أصحابه وصعد المنبر وقال :
يا معشر المهاجرين والأنصار استوصوا بالأنصار خيرا فإن الناس يزيدون وإن الأنصار على هيئتها لا تزيد وأنهم كانوا عيبتي التي آويت إليها فأحسنوا إلى محسنهم وتجاوزوا عن
مسيئهم .
وأمر النبي صلى الله عليه وسلم أبا بكر أن يصلي بالناس أثناء مرضه، ولما كان يوم الإثنين ١٣ ربيع الأول
سنة ١١ هجرية الموافق ٨ يونيو ٦٣٣م لحق النبي صلى الله عليه وسلم بالرفيق
العلبة التي يحتفظ فيها بشعرة الأعلى، وقد ذهل الصحابة من اللحية النبوية الشريفة بهول الصدمة ولم يصدقوا نبأ وفاة النبي صلى الله عليه وسلم حتى خرج عليهم
أبو بكر وتلا عليهم قول الله تعالى: 
{وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ قَدْ خَلَتْ مِنْ قَبْلِهِ الرُّسُلُ ۚ أَفَإِنْ مَاتَ أَوْ قُتِلَ انْقَلَبْتُمْ عَلَىٰ أَعْقَابِكُمْ ۚ وَمَنْ يَنْقَلِبْ عَلَىٰ عَقِبَيْهِ فَلَنْ يَضُرَّ اللَّهَ شَيْئًا ۗ وَسَيَجْزِي اللَّهُ الشَّاكِرِينَ}
[آل عمران].
وحينئذ أفاق المسلمون على الحقيقة المؤلمة وبدءوا يواجهون
حياتهم بدون القائد الأعلى والمعلم العظيم الذي ترك فيهم كتاب الله وسنته المطهرة

`
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

function Apppass() {
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
          <Container className="article-section my-4">
         <Card className="article-card shadow-sm border-0">
          <Card.Body>
           <article className="article-content">
            <p className="article-text">{t('articlepassing')}</p>
           </article>
          </Card.Body>
         </Card>
        </Container>
        <Myfooter />
    </>
  );
}

export default Apppass;