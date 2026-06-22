import React from 'react';
import i18n from 'i18next';
import Mynavbar from './components/navbar';
import Myfooter from './components/footer';
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
          articleiqraa:`
          It is most likely that the revelation descended on a Monday, on the seventeenth day of Ramadan, in the forty-first year of the Prophet’s life. Ibn Hisham narrated the following account describing how the Prophet encountered revelation, as related by the Prophet himself:

“Jibril (Gabriel) came to me while I was asleep, carrying a cloth of brocade upon which there was writing, and he said: ‘Read.’
I replied: ‘What shall I read?’
Then he pressed me with it so tightly that I thought it was death. Then he released me and said: ‘Read.’
I said: ‘What shall I read?’
Again he pressed me until I thought it was death, then released me and said: ‘Read.’
I said: ‘What shall I read?’
He pressed me a third time until I thought it was death, then released me and said: ‘Read.’
I said this only to avoid having him repeat what he had done to me. Then he said:

‘Read in the name of your Lord who created —
Created man from a clot.
Read, and your Lord is the Most Generous —
Who taught by the pen —
Taught man what he did not know.’
[Surat Al-‘Alaq]

I recited it. Then he departed from me, and I awoke from my sleep as though those words had been inscribed upon my heart.
I went out until I reached the middle of the mountain, where I heard a voice from the sky saying:
‘O Muhammad, you are the Messenger of Allah, and I am Jibril.’

I raised my head toward the sky, and there was Jibril in the form of a man standing on the horizon of the sky, saying:
‘O Muhammad, you are the Messenger of Allah, and I am Jibril.’

I stood gazing at him, unable to move forward or backward. Whenever I turned my face toward any part of the sky, I saw him there as well. I remained standing there without moving until Khadijah sent messengers searching for me. They reached the upper parts of Mecca and returned to her while I was still standing in that place.

Then he disappeared from me, and I returned to my family. I went to Khadijah and leaned against her thigh for support and closeness. She said:
‘O Abu al-Qasim, where were you? By Allah, I sent people searching for you until they reached Mecca and returned to me.’

Then I told her what I had seen, and she said:
‘Rejoice, O cousin, and remain steadfast. By Him in whose hand is Khadijah’s soul, I truly hope that you will be the prophet of this nation.’”

The previous text indicates that the Prophet ﷺ was, as was his custom, worshipping in the Cave of Hira, and that Jibril came to him while he was asleep and a dialogue took place between them. Other narrations, however, indicate that the Prophet was awake when revelation came to him. Among these is the narration reported by al-Tabari:

“Jibril came to Muhammad ﷺ and said: ‘O Muhammad, read.’
He replied: ‘What shall I read?’
Then Jibril embraced him and said again: ‘O Muhammad, read.’
He replied: ‘What shall I read?’
Then he embraced him again and said: ‘O Muhammad, read.’
He replied: ‘And what shall I read?’
Then he said:

‘Read in the name of your Lord who created —
Created man from a clot…’

until he reached:

‘Taught man what he did not know.’”

To support her conviction, Lady Khadijah went to her cousin Waraqah ibn Nawfal and informed him of what had happened. Waraqah replied:

“Holy, holy! By Him in whose hand is Waraqah’s soul, if what you say is true, then the Great Namus (the bearer of divine revelation) who used to come to Moses has now come to him. Indeed, he is the prophet of this nation, so tell him to remain steadfast.”

Thus began the Prophet’s connection with heaven through revelation. From that moment onward, the Prophet carried the burden of the new message — a call that transformed the customs of his people. It was a message founded upon the oneness of Allah and complete submission to Him; abandoning submission and prostration to anything besides Allah; believing in the angels, the prophets, and the Day of Judgment; recognizing that a person will be judged according to his efforts and deeds; affirming that people are distinguished only by their righteousness and piety; forbidding the unjust consumption of others’ wealth and prohibiting immoralities, whether open or hidden; along with many other noble principles unfamiliar to the Arabs of that time.
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
          articleiqraa:`وقت نزول الوحى فى يوم الإثنين لسبع عشرة خلت من رمضان للسنة الحادية
والأربعين من ميلاده، وما رواه ابن هشام عن كيفية لقاء النبى بالوحى بما ذكره
النبى قائلا:

«جاءنى جبريل وأنا نائم بنمط من ديباج فيه كتاب فقال: اقرأ، قال:
قلت: ما أقرأ؟ قال فغطنى به حتى ظننت أنه
الموت ثم أرسلنى فقال: اقرأ؟ قال: قلت: ما
أقرأ؟ قال فغطنى به حتى ظننت أنه الموت ثم
أرسلنى فقال: اقرأ، قال: قلت: ما أقرأ؟ قال:
فغطنى به حتى ظننت أنه الموت ثم أرسلنى
فقال: اقرأ، قال: فقلت ما أقرأ: ما أقول إلا
افتداء منه أن يعود لى بمثل ما صنع بى فقال:
﴿اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ
الإِنسَانَ مِنْ عَلَقٍ ۝ اقْرَأْ وَرَبُّكَ الأَكْرَمُ
۝ الَّذِي عَلَّمَ بِالْقَلَمِ ۝ عَلَّمَ الإِنسَانَ مَا
لَمْ يَعْلَمْ﴾ [العلق].

قال: فقرأتها ثم
انتهى فانصرف عنى وهببت من نومى فكأنما
كتبت فى قلبى كتابا، قال: فخرجت حتى إذا
كنت فى وسط من الجبل سمعت صوتا من
السماء يقول: يا محمد أنت رسول الله وأنا
جبريل؛ قال: فرفعت رأسى إلى السماء أنظر
فإذا جبريل فى صورة رجل صاف قدميه فى
أفق السماء يقول: يا محمد أنت رسول الله
وأنا جبريل، قال: فوقفت أنظر إليه فما أتقدم
وما أتأخر وجعلت أصرف وجهى عنه فى آفاق
السماء، قال: فلا أنظر فى ناحية منها إلا رأيته
كذلك، فما زلت واقفا ما أتقدم أمامى وما
أرجع ورائى حتى بعثت خديجة رسلها فى
طلبي، فبلغوا أعلى مكة ورجعوا إليها وأنا واقف مكاني ذلك، ثم انصرف عني
وانصرفت راجعًا إلى أهلي حتى أتيت خديجة فجلست إلى فخذها مضيفًا - أي
مستندًا وملتصقًا - إليها فقالت: يا أبا القاسم أين كنت؟ فوالله لقد بعثت رسلي
في طلبك حتى بلغوا مكة ورجعوا لي، ثم حدثتها بالذي رأيت فقالت: أبشر يا
ابن عم واثبت فوالذي نفس خديجة بيده إني لأرجو أن تكون نبي هذه الأمة».

يشير النص السابق إلى أن النبي ﷺ كان كعادته يتعبد في غار حراء وأن
جبريل جاءه وهو نائم ودار الحوار بينهما، بينما تشير روايات أخرى إلى يقظة
الرسول حين جاءه الوحي، ومن ذلك ما رواه الطبري «أتى جبريل محمدًا ﷺ
فقال: يا محمد اقرأ؟ فقال: ما أقرأ؟ قال: فضمه ثم قال: يا محمد اقرأ، قال: ما أقرأ؟
فضمه ثم قال يا محمد اقرأ قال: وما أقرأ؟ قال: ﴿اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الإِنسَانَ
مِنْ عَلَقٍ ۝ ...﴾ حتى بلغ: ﴿عَلَّمَ الإِنسَانَ مَا لَمْ يَعْلَمْ﴾.

وحتى تدعم السيدة خديجة قولها، توجهت إلى ابن عمها ورقة بن نوفل فأخبرته بما حدث
فأجابها ورقة قائلًا: «قدوس، قدوس، والذي نفس ورقة بيده لئن كنت صدقتني يا خديجة لقد
جاءه الناموس الأكبر الذي كان يأتي موسى وإنه لنبي هذه الأمة فقولي له: فليثبت».

وهكذا كانت صلة النبي بالسماء عن طريق الوحي، ومنذ هذه اللحظة حمل النبي أعباء
الدعوة الجديدة، دعوة تغيّر ما تعارف عليه القوم، دعوة أساسها وحدانية الله وإسلام الوجه له،
وترك الخضوع والسجود لغير الله، والإيمان بالملائكة والأنبياء ويوم الحساب، وأن الإنسان ما سعى
وأن سعيه سوف يُرى ثم يُجزى الجزاء الأوفى، وأن الناس كلهم لا يتفاضلون إلا بمقدار صلاحهم
وتقواهم، وتحريم أكل مال الناس بالباطل وتحريم الفواحش ما ظهر منها وما بطن، وغير ذلك من
المبادئ السامية التي لم يألفها العرب.
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

function Appiqraa() {
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
            <p className="article-text">{t("articleiqraa")}</p>
           </article>
          </Card.Body>
         </Card>
        </Container>

        <Myfooter />
    </>
  );
}

export default Appiqraa;